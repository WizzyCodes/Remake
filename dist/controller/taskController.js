"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskStatus = exports.createTask = exports.getTasks = void 0;
const taskModel_1 = __importDefault(require("../model/taskModel"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskModel_1.default.find().populate("assignedTo", "name email");
        return res.status(200).json({
            message: "Tasks found successfully",
            data: tasks,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, assignedTo, dueDate } = req.body;
        const task = yield taskModel_1.default.create({
            title,
            description,
            assignedTo,
            dueDate,
        });
        yield task.save();
        return res.status(201).json({
            message: "Task created successfully",
            data: task,
            status: 201,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});
exports.createTask = createTask;
const updateTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const { status } = req.body;
        const task = yield taskModel_1.default.findByIdAndUpdate(taskID, { status }, { new: true });
        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }
        return res.status(200).json({
            message: "Task updated successfully",
            data: task,
            status: 200,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});
exports.updateTaskStatus = updateTaskStatus;
