import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({
        "string.pattern.base":"Your brand value didn't  match pattern"
    }),
    price: Joi.string().min(0).max(1000000).messages({
        'string.price':'min price is 0',
        'string.price':'max price is 1000000',
    }),
    year: Joi.string().min(1990).max(2026).messages({
        "string.year":"min year is 0",
        "string.year":"max year is 1000000",
    }),
})
