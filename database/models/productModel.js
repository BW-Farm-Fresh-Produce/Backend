const db = require('../../config/dbConfig.js');

const getAllProducts = () => {
    return db('products').select('*');
}

const getProduct = (product) => {
    return db('products').select('*')
}

const addProduct = (product) => {
    return db('products').insert(product);
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct
}