const db = require('../../config/dbConfig.js');

const getAllProducts = () => {
    return db('products')
        .join('users', 'products.farmer_id', 'users.uid')
        .select('products.product_name',
            'products.price',
            'products.quantity',
            'products.quantity_type',
            'users.farm_name',
            'users.address',
            'users.city',
            'users.state',
            'users.zip',
            'products.farmer_id')
}

const getProduct = (product) => {
    return db('products').select('*')
}

const getAllProductsByFarmer = (farmerId) => {
    return db('products')
        .join('users', 'products.farmer_id', 'users.uid')
        .select('products.product_name',
            'products.price',
            'products.quantity',
            'products.quantity_type',
            'users.farm_name',
            'users.address',
            'users.city',
            'users.state',
            'users.zip',
            'products.farmer_id')
        .where('products.farmer_id', farmerId);
}

const updateProduct = (id, newItem) => {
    return db('products')
        .where(`product_id`, id)
        .update(newItem);
}
const addProduct = (product) => {
    return db('products').insert(product);
}


const deleteProductByID = (productId => {
    return db('products')
        .where('product_id', productId)
        .del()
});

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    getAllProductsByFarmer,
    updateProduct,
    deleteProductByID
}