"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controller/taskController");
const taskRouter = (0, express_1.Router)();
taskRouter.route("/create-task").post(taskController_1.createTask);
taskRouter.route("/get-tasks").get(taskController_1.getTasks);
taskRouter.route("/update-task-status/:taskID/status").patch(taskController_1.updateTaskStatus);
exports.default = taskRouter;
