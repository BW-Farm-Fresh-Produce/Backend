const db = require('../../config/dbConfig.js');

const getAllProducts = () => {
    return db('products')
        .join('users', 'products.farmer_id', 'users.uid')
        .select('products.product_name',
            'products.price',
            'products.quantity',
            'users.farm_name',
            'users.location',
            'products.farmer_id')
}

const getProduct = (product) => {
    return db('products').select('*')
}

const getAllProductsByFarmer = (farmerId) => {
    return db('products')
        .join('users', 'products.farmer_id', 'users.uid')
        .select('products.product_name', 'products.price', 'products.quantity', 'users.farm_name', 'users.location', 'products.farmer_id')
        .where('products.farmer_id', farmerId);
}


const addProduct = (product) => {
    return db('products').insert(product);
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    getAllProductsByFarmer
}