const db = require('../../config/dbConfig.js');

const getAllProducts = () => {
    return db('products').select('*');
}

const getProduct = (product) => {
    return db('products').select('*')
}

const getAllProductsByFarmer = (farmerId) => {
    return db('products')
        .join('users', 'products.farmer_id', 'users.farmer_id')
        .select('*')
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