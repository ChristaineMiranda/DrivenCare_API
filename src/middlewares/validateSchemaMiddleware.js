import errors from '../errors/index.js';

export default function validateSchema(schema){
    return (req, res, next) => {
        const {error} = schema.validate(req.body, {abortEarly: false});
        if(error){
            const errorsList = error.details.map((detail) => (detail.message));
            throw errors.incorrectFieldsError(errorsList);
        }
        next();
    }
}