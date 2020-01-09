exports.up = function (knex) {
    return knex.schema
        .createTable('users', user => {
            user.increments('uid');
            user.string('username', 255)
                .notNullable()
                .unique();
            user.string('password', 255).notNullable();
            user.string('role').notNullable();
            user.string('address').notNullable();
            user.string('city').notNullable();
            user.string('state').notNullable();
            user.integer('zip').notNullable();
            user.string('farm_name');
        })
        .createTable('products', product => {
            product.increments('product_id');
            product.string('product_name')
                .notNullable();
            product.string('price')
                .notNullable();
            product.float('quantity')
                .notNullable();
            product.string('quantity_type')
                .notNullable();
            product.integer('farmer_id')
                .unsigned()
                .notNullable()
                .references('uid')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('shoppingCart', cart => {
            cart.increments("item_id");
            cart.string('item_name')
                .notNullable();
            cart.string('price')
                .notNullable();
            cart.float('quantity')
                .notNullable();
            cart.string('quantity_type')
                .notNullable();
            cart.integer('consumer_id')
                .unsigned()
                .notNullable()
                .references('uid')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('orders', order => {
            order.increments('order_id');
            order.string('order_name');
            order.float('quantity')
                .notNullable();
            order.string('quantity_type')
                .notNullable();
            order.integer('consumer_id')
                .unsigned()
                .notNullable()
                .references('uid')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            order.integer('farmer_id')
                .unsigned()
                .notNullable()
                .references('uid')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('orders')
        .dropTableIfExists('shoppingCart')
        .dropTableIfExists('products')
        .dropTableIfExists('users')
};