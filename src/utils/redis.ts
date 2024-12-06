import Redis from "ioredis";
import { config } from "../config";

const redisClient = new Redis(config.REDIS_URL);

redisClient.on("connect", () => {
    console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
    console.error("Redis Connection Error:", err);
    process.exit(1);
});

export const setCache = async (
    key: string,
    value: string,
    ttlInSeconds: number | string
) => {
    try {
        await redisClient.set(key, value, "EX", ttlInSeconds);
    } catch (error) {
        console.error("Error setting cache:", error);
    }
};

export const getCache = async (key: string): Promise<string | null> => {
    try {
        return await redisClient.get(key);
    } catch (error) {
        console.error("Error getting cache:", error);
        return null;
    }
};

export const deleteCache = async (key: string): Promise<void> => {
    try {
        await redisClient.del(key);
    } catch (error) {
        console.error("Error deleting cache:", error);
    }
};

export default redisClient;
