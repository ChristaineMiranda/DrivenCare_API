import bcrypt from 'bcrypt';
import errors from '../errors/index.js';
import doctorRepositories from '../repositories/doctorRepositories.js';

async function create(name, email, password, specialty, city, adress){
    
    const {rowCount:emailExists} = await doctorRepositories.findByEmail(email);
    if(emailExists) throw errors.duplicatedEmailError();

    const hashPassword = await bcrypt.hash(password, 10);    
    await doctorRepositories.create(name, email, hashPassword, specialty, city, adress);
}

export default {create, }