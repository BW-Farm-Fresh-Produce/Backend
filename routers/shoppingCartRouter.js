const Router = require('express').Router();
const CartModel = require('../database/models/shoppingCartModel.js');
const { isConsumer } = require('../middleware/roleIdentifier.js');

Router.get('/items', isConsumer, (req, res) => {
    CartModel.getCartByUser(req.decodedJwt.uid)
        .then(items => {
            res.status(200).json({ items, message: 'success' })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: 'server error'
            })
        });
});

Router.post('/', isConsumer, (req, res) => {
    console.log(req.body)
    CartModel.addItem(req.body)
        .then(item => {
            res.status(201).json({
                item,
                message: 'added to cart'
            })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: "server error"
            })
        })
})


module.exports = Router