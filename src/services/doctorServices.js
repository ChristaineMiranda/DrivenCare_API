import bcrypt from 'bcrypt';
import errors from '../errors/index.js';
import {v4 as uuid} from 'uuid';
import doctorRepositories from '../repositories/doctorRepositories.js';

async function create(name, email, password, specialty, city, adress){
    
    const {rowCount:emailExists} = await doctorRepositories.findByEmail(email);
    if(emailExists) throw errors.duplicatedEmailError();

    const hashPassword = await bcrypt.hash(password, 10);    
    await doctorRepositories.create(name, email, hashPassword, specialty, city, adress);
}

async function signin(email, password){

    const {rowCount, rows : [user] } = await doctorRepositories.findByEmail(email);
    if(!rowCount) throw errors.invalidCredentialsError();
 
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) throw errors.invalidCredentialsError();

    const {rows : [session]} = await doctorRepositories.findSession(user.id, "doctor");

    if(session){
        return session.token;
    }
    const token = uuid();
    await doctorRepositories.createSession(user.id, "doctor", token);
    return token; 
}

export default {create, signin}