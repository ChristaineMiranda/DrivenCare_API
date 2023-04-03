import db from '../config/database.js';

async function findByEmail(email) {
    return await db.query(`SELECT * FROM patients WHERE email = $1;`, [email]);
}

async function create(name, email, password) {
    await db.query(`INSERT INTO patients (name, email, password) VALUES ($1, $2, $3);`, [name, email, password]);
}

async function findSessionById(id) {
    return await db.query(`SELECT * FROM sessions WHERE user_id = $1 AND type = $2;`, [id, "patient"]);
}

async function createSession(id, type, token) {
    await db.query(`INSERT INTO sessions (user_id, token, type) VALUES ($1, $2, $3);`, [id, token, type]);
}

async function searchDoctorsByName(value) {
    return await db.query(`SELECT id, name, email, specialty, city, adress FROM doctors WHERE name = $1;`, [value]);
}

async function searchDoctorsBySpecialty(value) {
    return await db.query(`SELECT id, name, email, specialty, city, adress FROM doctors WHERE specialty = $1;`, [value]);
}

async function searchDoctorsByCity(value) {
    return await db.query(`SELECT id, name, email, specialty, city, adress FROM doctors WHERE city = $1;`, [value]);
}

async function searchAllDoctors(){
    return await db.query(`SELECT id, name, email, specialty, city, adress FROM doctors;`);
}

async function findSessionByToken(token){
    return await db.query(`SELECT * FROM sessions WHERE token = $1;`, [token]);
}

async function createAppointment(userId, doctorId, date, time){
    return await db.query(`INSERT INTO appointments (patient_id, doctor_id, date, time) VALUES ($1, $2, $3, $4) RETURNING id;`, [userId, doctorId, date, time]);
}

async function doctorExists (doctorId){
    return await db.query(`SELECT * FROM doctors WHERE id = $1;`, [doctorId]);
}

async function appointmentExists(doctorId, date, time){
    return await db.query(`SELECT * FROM appointments WHERE doctor_id = $1 AND date = $2 AND time = $3;`, [doctorId, date, time]);
}


export default {
    findByEmail,
    create,
    findSessionById,
    createSession,
    searchDoctorsByName,
    searchDoctorsBySpecialty,
    searchDoctorsByCity,
    searchAllDoctors,
    findSessionByToken,
    doctorExists,
    appointmentExists,
    createAppointment
}