const Joi = require('@hapi/joi');

// validation user function
const registerValidation = data => {
    const shema = Joi.object({
        first_name: Joi.string()
                .min(2)
                .max(60)
                .required(),
        last_name: Joi.string()
                .min(2)
                .max(60)
                .required(),
        email: Joi.string()
                .min(8)
                .max(120)
                .required()
                .email(),
        password : Joi.string()
                .min(6)
                .required()
    });
   
    return shema.validate(data);
};

const loginValidation = data => {
    const shema = Joi.object({
        email: Joi.string()
                .required()
                .email(),
        password : Joi.string()
                .required()
    });
   
    return shema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;