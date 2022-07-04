import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import activityRouter from "./activityRouter.js";

const router = Router();
router.use(authRouter);
router.use(userRouter)
router.use(activityRouter);
export default router;