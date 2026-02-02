import express from 'express';
import { hash } from 'bcryptjs';
import { UserModel } from '../modules/UserModel.js';

export const userAPI = express.Router();

// ------------------------------------------------------
// CREATE USER
// Route: POST /user-API/users
// ------------------------------------------------------
userAPI.post('/users', async (req, res) => {
   try {
      // Get user data from request body
      const newUser = req.body;

      // Hash password
      const hashedPassword = await hash(newUser.password, 12);
      newUser.password = hashedPassword;

      // Create user document
      const newUserDoc = new UserModel(newUser);

      // Save to database
      await newUserDoc.save();

      // Send response
      res.status(201).json({
         message: "User created successfully",
         payload: newUserDoc
      });

   } catch (error) {
      res.status(400).json({
         error: error.message
      });
   }
});