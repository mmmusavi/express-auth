import jwt from "jsonwebtoken";
import { config } from "../config";

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: config.TOKEN_EXPIRES_IN });
};

export const verifyToken = (token: string | undefined): any => {
    try {
        if (token) return jwt.verify(token, config.JWT_SECRET);
        else throw new Error("Invalid or expired token");
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
};
