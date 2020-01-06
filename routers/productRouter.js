const Router = require('express').Router();
const ProductDb = require('../database/models/productModel.js');
const { isFarmer } = require('../middleware/roleIdentifier.js');

Router.get('/products', (req, res) => {
    ProductDb.getAllProducts()
        .then(product => {
            res.status(200).json({ product, message: "success" })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: "server error"
            })
        });
})

Router.get('/', isFarmer, (req, res) => {
    ProductDb.getAllProductsByFarmer(req.decodedJwt.uid)
        .then(product => {
            res.status(200).json({
                product,
                message: "success"
            })
        })
        .catch(err => {
            res.status(500).json({
                err,
                message: "server error"
            })
        });
})

Router.post('/', isFarmer, (req, res) => {
    const body = req.body

    ProductDb.addProduct(body)
        .then(product => {
            res.status(201).json({ product, message: `${body.product_name} successfully added` })
        })
        .catch(err => {
            res.status(500).json({ err, message: "server error" })
        })
})


module.exports = Router