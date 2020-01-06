const db = require('../../config/dbConfig.js');

const getCartByUser = (userId) => {
    return db('shoppingCart')
        .join('users', 'shoppingCart.consumer_id', 'users.uid')
        .select('shoppingCart.item_name',
            'shoppingCart.price',
            'shoppingCart.quantity',
            'shoppingCart.consumer_id')
        .where('shoppingCart.consumer_id', userId);
}


const addItem = (item) => {
    return db('shoppingCart').insert(item);
}

module.exports = {
    getCartByUser,
    addItem
}