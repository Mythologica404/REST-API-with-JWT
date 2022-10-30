import { Router } from "express";
import todoController from "../controllers/todoController.js";

const router = Router();

router.get("/", todoController.getAllTodo);
router.get("/:todoId", todoController.getTodoByUserID);

export default router;
