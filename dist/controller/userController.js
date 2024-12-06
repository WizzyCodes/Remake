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
exports.createUser = exports.getUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../model/userModel"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        return res.status(200).json({
            message: "Users found successfully",
            data: users,
            status: 200,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield userModel_1.default.create({
            name,
            email,
            password: hashedPassword,
        });
        yield user.save();
        return res.status(201).json({
            message: "User created successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            status: 201,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});
exports.createUser = createUser;
