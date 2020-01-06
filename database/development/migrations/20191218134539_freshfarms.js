exports.up = function (knex) {
    return knex.schema
        .createTable('users', user => {
            user.increments('uid');
            user.string('username', 255)
                .notNullable()
                .unique();
            user.string('password', 255).notNullable();
            user.string('role').notNullable();
            user.string('location');
            user.string('farm_name');
        })
        .createTable('products', product => {
            product.increments('product_id');
            product.string('product_name')
                .notNullable();
            product.string('price')
                .notNullable();
            product.string('quantity')
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
            cart.integer('product_id')
                .unsigned()
                .notNullable()
                .references('product_id')
                .inTable('product_id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            cart.integer('consumer_id')
                .unsigned()
                .notNullable()
                .references('uid')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('products')
        .dropTableIfExists('users')


};