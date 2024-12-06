"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.route("/create-user").post(userController_1.createUser);
userRouter.route("/get-users").get(userController_1.getUsers);
exports.default = userRouter;
