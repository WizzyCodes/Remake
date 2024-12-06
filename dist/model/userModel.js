"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    task: {
        type: mongoose_1.Types.ObjectId,
        ref: "task",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("user", userModel);
