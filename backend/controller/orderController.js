import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/ordermodel.js";

// @desc create new Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
   res.send('Add order items')
})


// @desc get logged in users Order
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
   res.send('getMyOrders items')
})

// @desc get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
   res.send('getOrderById items')
})


// @desc updateOrder to paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
   res.send('updateOrder to paid')
})


// @desc add Order to delevered
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
   res.send('updateOrderToDelivered done')
})


// @desc GET All Orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
   res.send('getOrders done')
})

export {
   addOrderItems,
   getMyOrders,
   getOrderById,
   updateOrderToPaid,
   updateOrderToDelivered,
   getOrders
};