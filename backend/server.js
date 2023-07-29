// I am using ES6 module(i.e I will not use require('')), For that I changed "type": "module", in package.json

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();
import products from './data/products.js';
import productRoutes from './routes/productRoute.js';

const PORT = process.env.PORT || 5000;
connectDB() // starting mongodb

const app = express();

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

app.use(notFound)
app.use(errorHandler)



app.listen(PORT,function(err){
   if(err){
      console.log(`Error from index.js: ${err}`);
   }
   console.log(`Server is up and running on port ${PORT}`)
})