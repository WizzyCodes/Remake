"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskModel = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ["pending", "in progress", "completed"],
        default: "pending",
    },
    assignedTo: {
        type: mongoose_1.Types.ObjectId,
        ref: "user",
    },
    dueDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("task", taskModel);
