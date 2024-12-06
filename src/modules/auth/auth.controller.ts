import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const register = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.register(req.body.email, req.body.password);
        res.status(201).json({ token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body.email, req.body.password);
        res.status(200).json({ token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
