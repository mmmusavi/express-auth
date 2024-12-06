import { RequestHandler } from "express";
import { ObjectSchema } from "joi";

export const validate = (schema: ObjectSchema): RequestHandler => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessages = error.details.map((detail) =>
                detail.message.replace(/"/g, "")
            );
            res.status(400).json({ errors: errorMessages });
            return;
        }
        next();
    };
};
