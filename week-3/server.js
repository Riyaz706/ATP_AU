import express from 'express';
import { productApp } from './APIS/productAPI.js';
import { connect } from 'mongoose';

const app = express();
const PORT = 3000;  

// middleware
app.use(express.json());

// routes
app.use('/products-API', productApp);

async function connection() {
  try {
    await connect('mongodb://127.0.0.1:27017/week3DB');
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.log('Failed to connect to MongoDB:', error.message);
  }
}

connection();