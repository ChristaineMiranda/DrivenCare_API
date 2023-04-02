import db from '../config/database.js';

async function findByEmail(email){
    return await db.query(`SELECT * FROM doctors WHERE email = $1;`, [email]);
}

async function create (name, email, password, specialty, city, adress){
    await db.query(`INSERT INTO doctors (name, email, password, specialty, city, adress) VALUES ($1, $2, $3, $4, $5, $6);`, [name, email, password, specialty, city, adress]);
}

async function findSessionById (id){
    return await db.query(`SELECT * FROM sessions WHERE user_id = $1 AND type = $2;`, [id, "doctor"]);
}

async function createSession(id, type, token){
    await db.query(`INSERT INTO sessions (user_id, token, type) VALUES ($1, $2, $3);`, [id, token, type]);
}

export default {
    findByEmail,
    create,
    findSessionById,
    createSession
}