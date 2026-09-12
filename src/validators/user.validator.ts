
//визначаю схему по якій об'єкти повинні валідуватися

import * as Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        "string.pattern.base":"only chars allowed & this must be at least 4 characters.",
    }),
    password: Joi.string().min(3).max(6).required().messages({
        "string.min":"password can be at least 3 chars",
        "string.max":"password can be at least 6 chars"
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "number.min":"min age is 1 ",
        "number.max":"max age is 117"
    }),
})
export default userValidator;
