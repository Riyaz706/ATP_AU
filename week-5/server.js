import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './Routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);

// Database Connection
const dbUri = process.env.DB_MODULE || 'mongodb://localhost:27017/userdb';
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"Internal Server Error"})
})