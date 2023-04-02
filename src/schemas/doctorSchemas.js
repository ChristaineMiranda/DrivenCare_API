import joi from 'joi';

const signup = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.valid(joi.ref('password')).required(),
    specialty: joi.string().min(5).required(),
    city: joi.string().required(),
    adress: joi.string().min(5).required()
});

export default {signup}