import errors from "../errors/index.js";
import userRepositories from "../repositories/patientRepositories.js";

export default async function authValidate(req, res, next){
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if(!token){
        throw errors.invalidCredentialsError();
    }
    const {rows : [user]} = await userRepositories.findSessionByToken(token);
    res.locals.user = {userId: user.user_id, type: user.type};

    next()
}