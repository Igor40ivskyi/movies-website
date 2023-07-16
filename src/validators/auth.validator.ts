import Joi from "joi";
import {regexConstants, regexMessages} from "../constants";

export class AuthValidator {
    public static firstName = Joi.string().min(2).max(50);
    public static email = Joi.string().regex(regexConstants.EMAIL).lowercase()
        .messages({'string.pattern.base': regexMessages.EMAIL,});

    public static password = Joi.string().regex(regexConstants.PASSWORD)
        .messages({'string.pattern.base': regexMessages.PASSWORD});

    static register = Joi.object({
        name: this.firstName.required(),
        email : this.email.required(),
        password : this.password.required(),
    });

    static login = Joi.object({
        email: this.email.required(),
        password: this.password.required(),
    })
}

