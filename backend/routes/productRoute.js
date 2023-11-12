import express from "express";
// import products from '../data/products.js';
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
// import productController from '../controller/productController.js'
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// router.get('/', getProducts);

// router.get('/:id', getProductById)

// newer way to call
// both are same
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProductReview);
export default router;
