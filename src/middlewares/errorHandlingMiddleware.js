import httpStatus from "http-status";

function errorhandlingMiddleware(err, req, res, next){

    if(err.name === "DuplicatedEmailError"){
        return res.status(httpStatus.CONFLICT).send(err.message);
    }
    if(err.name === "incorrectFieldsError"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
    }
}

export default errorhandlingMiddleware;