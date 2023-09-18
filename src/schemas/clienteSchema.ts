import Joi from "joi";
import { User } from "protocols";

const clientSchema = Joi.object<User>({
name: Joi.string().required(),
password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9_]{3,30}$')).required()
})

export default clientSchema