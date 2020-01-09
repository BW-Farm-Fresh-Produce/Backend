const Router = require('express').Router();
const OrderDb = require('../database/models/orderModel.js');
const { isConsumer } = require('../middleware/roleIdentifier.js');

Router.post('/orders', isConsumer, (req, res) => {
    req.body = {
        ...req.body,
        consumer_id: req.decodedJwt.uid
    }

    console.log(req.body)
    OrderDb.addOrder(req.body)
        .then(order => {
            res.status(201).json({
                order,
                message: `${req.body.order_name} successfully added`
            })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: "server error"
            })
        })
});

Router.get('/orders/:id', (req, res) => {
    OrderDb.getOrdersByFarmerId(req.params.id)
        .then(orders => {
            res.status(200).json({
                orders,
                message: "success"
            })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: 'server error'
            })
        })
})

Router.get('/orders', (req, res) => {
    OrderDb.getOrders(req.params.id)
        .then(orders => {
            res.status(200).json({
                orders,
                message: "success"
            })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: 'server error'
            })
        })
})

module.exports = Router;