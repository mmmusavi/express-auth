import { Request, Response } from "express";
import { UserService } from "./user.service";

export const me = async (req: Request, res: Response) => {
    try {
        const user = await UserService.me(req);
        res.status(201).json({ user });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getSession = async (req: Request, res: Response) => {
    try {
        const token = await UserService.getSession(req);
        res.status(201).json({ token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
