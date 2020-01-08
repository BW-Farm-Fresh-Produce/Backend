const db = require('../../config/dbConfig.js');

const getCartByUser = (userId) => {
    return db('shoppingCart')
        .join('users', 'shoppingCart.consumer_id', 'users.uid')
        .select('shoppingCart.item_name',
            'shoppingCart.price',
            'shoppingCart.quantity',
            'shoppingCart.quantity_type',
            'shoppingCart.consumer_id')
        .where('shoppingCart.consumer_id', userId);
}

const updateCartItem = (newItem) => {
    return knex('shoppingCart')
        .where({ item_id: newItem.item_id })
        .update(newItem, ['item_id', 'item_name'])
}

const addItem = (item) => {
    return db('shoppingCart').insert(item);
}

const deleteAllItemByID = (consumerId => {
    return db('shoppingCart')
        .where('consumer_id', consumerId)
        .del()
})

const delteItemByID = (itemId => {
    return db('shoppingCart')
        .where('item_id', itemId)
        .del()
})

module.exports = {
    getCartByUser,
    addItem,
    deleteAllItemByID,
    delteItemByID
}