import db from '../config/database.js';

async function findByEmail(email){
    return await db.query(`SELECT * FROM doctors WHERE email = $1;`, [email]);
}

async function create (name, email, password, specialty, city, adress){
    await db.query(`INSERT INTO doctors (name, email, password, specialty, city, adress) VALUES ($1, $2, $3, $4, $5, $6);`, [name, email, password, specialty, city, adress]);
}

export default {
    findByEmail,
    create,
}