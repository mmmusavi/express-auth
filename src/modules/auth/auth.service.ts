import * as argon from "argon2";
import { User } from "../user/user.model";
import { generateToken } from "../../utils/jwt";
import { setCache } from "../../utils/redis";
import { config } from "../../config";

export class AuthService {
    static async register(email: string, password: string): Promise<string> {
        const checkExists = await User.findOne({ email });

        if (checkExists) {
            throw new Error("User exists");
        }

        const hashedPassword = await argon.hash(password);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        return generateToken({ email: user.email });
    }

    static async login(email: string, password: string): Promise<string> {
        const user = await User.findOne({ email });
        if (!user) throw new Error("Invalid credentials");

        const isPasswordValid = await argon.verify(user.password, password);
        if (!isPasswordValid) throw new Error("Invalid credentials");

        const token = generateToken({ email: user.email });
        await setCache(user._id.toString(), token, config.REDIS_EXPIRES_TTL);
        return token;
    }
}
