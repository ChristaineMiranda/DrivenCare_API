import httpStatus from "http-status";

function errorhandlingMiddleware(err, req, res, next){

    if(err.name === "DuplicatedEmailError" || err.name === "InvalidDoctorId" || err.name === "AppointmentUnavailable"){
        return res.status(httpStatus.CONFLICT).send(err.message);
    }
    if(err.name === "incorrectFieldsError"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
    }
    if(err.name === "InvalidCredentialsError"){
        return res.status(httpStatus.UNAUTHORIZED).send(err.message);
    }
   
}

export default errorhandlingMiddleware;