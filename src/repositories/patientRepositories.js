import db from '../config/database.js';

async function findByEmail(email){
    return await db.query(`SELECT * FROM patients WHERE email = $1;`, [email]);
}

async function create (name, email, password){
    await db.query(`INSERT INTO patients (name, email, password) VALUES ($1, $2, $3);`, [name, email, password]);
}

async function findSession (id, type){
    return await db.query(`SELECT * FROM sessions WHERE user_id = $1 AND type = $2;`, [id, type]);
}

async function createSession(id, type, token){
    
    await db.query(`INSERT INTO sessions (user_id, token, type) VALUES ($1, $2, $3);`, [id, token, type]);
}

export default {
    findByEmail,
    create,
    findSession, 
    createSession
}