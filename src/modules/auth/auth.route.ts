import { Router } from "express";
import { register, login } from "./auth.controller";
import { validate } from "../../middlewares/validate";
import { registerValidation, loginValidation } from "./auth.validation";

const router = Router();

router.post("/register", validate(registerValidation), register);
router.post("/login", validate(loginValidation), login);

export default router;
