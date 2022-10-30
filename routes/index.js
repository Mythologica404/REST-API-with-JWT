import { Router } from "express";
import userRouter from "./userRouter.js";
import todoRouter from "./todoRouter.js";
import authentication from "../middlewares/authorization.js";

const router = Router();

router.use("/user/", userRouter);
router.use("/todo/", authentication, todoRouter);

export default router;
