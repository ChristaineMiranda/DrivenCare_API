import bcrypt from 'bcrypt';
import patientRepositories from '../repositories/patientRepositories.js'
import errors from '../errors/index.js';

async function create(name, email, password){
    
    const {rowCount:emailExists} = await patientRepositories.findByEmail(email);
    if(emailExists) throw errors.duplicatedEmailError();

    const hashPassword = await bcrypt.hash(password, 10);
    await patientRepositories.create(name, email, hashPassword);
}

export default {create, }