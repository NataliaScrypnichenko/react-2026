import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({
        "string.pattern.base":"Your brand value didn't  match pattern"
    }),
    price: Joi.string().min(0).max(1000000).messages({
        'string.min':'min price is 0',
        'string.max':'max price is 1000000',
    }),
    year: Joi.string().min(1990).max(2026).messages({
        "string.min":"min year is 1990",
        "string.max":"max year is 2026",
    }),
})
