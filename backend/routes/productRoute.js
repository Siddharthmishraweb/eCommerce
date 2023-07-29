import express from "express";
// import products from '../data/products.js';
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
// import productController from '../controller/productController.js'
import { getProducts, getProductById } from "../controller/productController.js";
const router = express.Router()

// router.get('/', getProducts);

// router.get('/:id', getProductById)

// newer way to call
// both are same
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router