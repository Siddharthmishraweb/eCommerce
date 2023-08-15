import express from "express";
import {    
   addOrderItems,
   getMyOrders,
   getOrderById,
   updateOrderToPaid,
   updateOrderToDelivered,
   getOrders  
 } from "../controller/orderController.js";
 const router = express.Router();
 import { protect, admin } from "../middleware/authMiddleware.js";
 
 router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
 router.route('/mine').get(protect, getMyOrders);
 router.route('/:id').get(protect, admin, getOrderById);
 router.route('/:id/pay').put(protect, updateOrderToPaid);
 router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);
 

 
 export default router