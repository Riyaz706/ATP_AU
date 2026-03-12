import jwt from 'jsonwebtoken';
import { UserModel } from '../models/UserModel.js';
import dotenv from 'dotenv';
dotenv.config()

export const checkUser = async (req, res, next) => {
    // Role verification strictly from token
    if (req.user?.role !== "USER") {
        return res.status(403).json({ message: "Forbidden. User access required." });
    }

    // Check if the user exists and is active
    let userObj = await UserModel.findById(req.user.id);
    if (!userObj || !userObj.isActive) {
        return res.status(403).json({ message: "Forbidden. User account is inactive or not found." });
    }

    next();
}