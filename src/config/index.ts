import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "",
    JWT_SECRET: process.env.JWT_SECRET || "",
    REDIS_URL: process.env.REDIS_URL || "",
    TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN || "12h",
    REDIS_EXPIRES_TTL: process.env.REDIS_EXPIRES_TTL || 43200,
};
