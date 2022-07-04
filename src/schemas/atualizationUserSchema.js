import joi from 'joi';

const atualizationUserSchema = joi.object({
    name: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
    confirmPassword: joi.ref('password')
});

export default atualizationUserSchema;