import { Schema, model } from 'mongoose';

//create user schema
const userSchema = new Schema({
   username: {
      type: String,
      required: [true, 'Username is required'],
      minLength: [3, 'Username must be at least 3 characters long'],
      maxLength: [6, 'Username cannot exceed 6 characters'],
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [8, 'Password must be at least 8 characters long'],
   },
   age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [18, 'Age must be at least 18'],
      max: [65, 'Age cannot exceed 65'],
   }
},
   {
      strict: 'throw',
      timestamps: true,
   }
);


// // create user model with that schema
export const userModel = model('user', userSchema);

