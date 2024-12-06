"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const mainApp = (app) => {
    try {
        app.use("/api/task", taskRouter_1.default);
        app.use("/api/user", userRouter_1.default);
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "Welcome to the task api",
                });
            }
            catch (error) {
                res.status(404).json({
                    message: error,
                });
            }
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
