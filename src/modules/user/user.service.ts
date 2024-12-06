import { getCache } from "../../utils/redis";
import { User } from "./user.model";

export class UserService {
    static async me(req: any): Promise<string> {
        return req.user;
    }

    static async getSession(req: any): Promise<string | null> {
        const user = await User.findOne({ email: req.user.email });
        if (user) {
            return await getCache(user?._id.toString());
        } else {
            throw new Error("Invalid token");
        }
    }
}
