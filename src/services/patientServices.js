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

    const {rows : [session]} = await patientRepositories.findSessionById(user.id);
    if(session){
        return session.token;
    }
    const token = uuid();
    await patientRepositories.createSession(user.id, "patient", token);
    return token; 
}

async function searchDoctors(filter, value){
    let list;
    if(filter === "name"){
        const {rows} = await patientRepositories.searchDoctorsByName(value);
        list = rows;
    }
    else if(filter === "specialty"){
       const {rows} = await patientRepositories.searchDoctorsBySpecialty(value);
       list = rows;
     }
    else if(filter === "city"){
        const {rows} = await patientRepositories.searchDoctorsByCity(value);
        list = rows;
    }
    else{
        const {rows} = await patientRepositories.searchAllDoctors();
        list = rows;
    }

    return list;
}

export async function createAppointment(userId, doctorId, date, time){

    const {rowCount : doctorExists} = await patientRepositories.doctorExists(doctorId);
    if(!doctorExists){
        throw errors.invalidDoctorId();
    }

    const {rowCount} = await patientRepositories.appointmentExists(doctorId, date, time);
    if(rowCount){
        throw errors.appointmentUnavailable();
    }

    const {rows : [appointmentId]} = await patientRepositories.createAppointment(userId, doctorId, date, time);
    return appointmentId;
}
//FAZER VALIDAÇÃO DE DATA E HORA
export default {create, signin, searchDoctors, createAppointment}