const express = require('express');

const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get(
    '/checkout-session/:productId',
    orderController.getCheckoutSession
)

router
.route('/')
.get(orderController.getOrders)
.post(orderController.createOrder);

router
.route('/:id')
.get(orderController.getOrder)
.patch(orderController.updateOrder)
.delete(orderController.deleteOrder);

module.exports = router;

