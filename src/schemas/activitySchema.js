import joi from 'joi';

const activitySchema = joi.object({
    value: joi.number(),
    description: joi.string()
});

export default activitySchema;