import { Router } from "express";
import { me, getSession } from "./user.controller";
import { authenticate } from "../../middlewares/authenticate";

const router = Router();

router.get("/me", authenticate, me);
router.get("/get-session", authenticate, getSession);

export default router;
