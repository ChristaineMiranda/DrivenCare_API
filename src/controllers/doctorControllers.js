import doctorServices from "../services/doctorServices.js";

async function create(req, res, next){
   
    const {name, email, password, specialty, city, adress} = req.body;
    try {
        await doctorServices.create(name, email, password, specialty, city, adress);
        return res.sendStatus(201);        

    } catch (err) {
        next(err);
    }
}
export default {create}