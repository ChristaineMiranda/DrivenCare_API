import patientServices from '../services/patientServices.js';


async function create(req, res, next){
    const {name, email, password} = req.body;
    try {
        await patientServices.create(name, email, password);
        return res.sendStatus(201);        

    } catch (err) {
        next(err);
    }

}

export default {create}