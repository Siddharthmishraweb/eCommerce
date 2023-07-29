// I am using ES6 module(i.e I will not use require('')), For that I changed "type": "module", in package.json

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
dotenv.config();
import products from './data/products.js';
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

app.get('/api/product', function(req, res){
   res.json(products);
});

app.get('/api/products/:id', function(req, res){
   //console.log(req.params.id);
   const product = products.find((p) => p._id === req.params.id )
   res.json(product);
})

app.listen(PORT,function(err){
   if(err){
      console.log(`Error from index.js: ${err}`);
   }
   console.log(`Server is up and running on port ${PORT}`)
})