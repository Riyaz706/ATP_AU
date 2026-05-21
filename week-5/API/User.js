import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    email: {
        type: String,
        required: [true,"Email is required"],
    },
    dob: {
        type: Date,
        required: [true,"DOB is required"]
    },
    mobile: {
        type: String,
        required: [true,"Mobile is required"]
    },
    status: {
        type: Boolean,
        default:true
    }
    
}, { timestamps: true,
    versionKey:false,
    strict:"throw"
 });

export default mongoose.model('User', userSchema);