import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import patientRepositories from '../repositories/patientRepositories.js'
import errors from '../errors/index.js';



async function create(name, email, password){
    
    const {rowCount:emailExists} = await patientRepositories.findByEmail(email);
    if(emailExists) throw errors.duplicatedEmailError();

    const hashPassword = await bcrypt.hash(password, 10);
    await patientRepositories.create(name, email, hashPassword);
}

async function signin(email, password){

    const {rowCount, rows : [user] } = await patientRepositories.findByEmail(email);
    if(!rowCount) throw errors.invalidCredentialsError();
 
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) throw errors.invalidCredentialsError();

    const {rows : [session]} = await patientRepositories.findSession(user.id, "patient");
    if(session){
        return session.token;
    }
    const token = uuid();
    await patientRepositories.createSession(user.id, "patient", token);
    return token; 
}

export default {create, signin}