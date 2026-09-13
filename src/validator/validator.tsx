import * as Joi from "joi";

export const carValidator =Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({
        "string.pattern.base":"Your brand value didn't match pattern. ",
    }),
    price: Joi.number().min(0).max(1000000).messages({
        "string.min":"mim price is 0 ",
        "string.max":"mim price is 1 000 000 "
    }),
    year: Joi.number().min(1190).max(2026).messages({
        "string.min":"mim year is 1990 ",
        "string.max":"mim yer is 2026 "
    }),
})

export default carValidator
