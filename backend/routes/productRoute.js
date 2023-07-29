import express from "express";
// import products from '../data/products.js';
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router()

router.get('/', asyncHandler(async function(req, res){
   const products = await Product.find({})
   console.log('product api me aaya h')
   res.json(products);
}));

router.get('/:id', asyncHandler(async function(req, res){
   //console.log(req.params.id);
   const product = await Product.findById(req.params.id);
   if(product)
     return res.json(product);
   res.status(404)
   throw new Error('Product not found')
   // return res.status(404).json({message:'Product not found'});
}))

export default router