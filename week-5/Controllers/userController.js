import express from 'express';
import User from '../API/User.js';
export const UserApp = express.Router();


UserApp.post('/', async (req, res, next) => {

        const { name, email, dob, mobile } = req.body;
        const newUser = new User({ name, email, dob, mobile });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
})

UserApp.get('/', async (req, res, next) => {
        const users = await User.find();
        res.status(200).json(users);
})

UserApp.put('/:id', async (req, res, next) => {
        const { name, email, dob, mobile } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, dob, mobile });
        res.status(200).json({ message: "User updated successfully" });
})

UserApp.delete('/:id', async (req, res, next) => {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
})
