// I am using ES6 module(i.e I will not use require('')), For that I changed "type": "module", in package.json

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
dotenv.config();
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import products from './data/products.js';
import productRoutes from './routes/productRoute.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
const PORT = process.env.PORT || 5000;
connectDB() // starting mongodb

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

app.use(cookieParser());
app.use(cors());



app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   next();
 });

app.get('/', function(req, res){
   res.send('API is running...')
})


app.use('/api/products', productRoutes) 
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

// console.log("PAYPAL_CLIENT_ID:  ",process.env);

app.get('/api/config/paypal', (req, res) => {
   clientId:  process.env.PAYPAL_CLIENT_ID
})

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)



app.listen(PORT,function(err){
   if(err){
      console.log(`Error from index.js: ${err}`);
   }
   console.log(`Server is up and running on port ${PORT}`)
})
