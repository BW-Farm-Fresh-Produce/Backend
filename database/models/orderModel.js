const db = require('../../config/dbConfig.js');

const addOrder = (order) => {

    return db('orders').insert(order);
}

const getOrdersByFarmerId = () => {
    return db('orders')
        .join('users', 'orders.consumer_id', 'users.uid')
        .select(
            'orders.order_id',
            'orders.order_name',
            'users.address',
            'users.city',
            'users.state',
            'users.zip',
            'users.username'
        )
}

const getOrders = (farmerId) => {
    return db('orders')
        .join('users', 'orders.consumer_id', 'users.uid')
        .select(
            'orders.order_id',
            'orders.order_name',
            'users.address',
            'users.city',
            'users.state',
            'users.zip',
            'users.username'
        )
}

module.exports = {
    addOrder,
    getOrdersByFarmerId,
    getOrders
}