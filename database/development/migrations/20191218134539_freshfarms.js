exports.up = function(knex) {
    return knex.schema
        .createTable('users', user => {
            user.increments('user_id');
            user.string('username', 255)
                .notNullable()
                .unique();
            user.string('password', 255).notNullable();
            user.string('location');
            user.string('farm_name');
        })
        // .createTable('seller', seller => {
        //     seller.increments('seller_id');
        //     seller.string('farm_name');
        //     seller.string('location')
        //         .notNullable()
        //         .references('location')
        //         .inTable('users')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');;
        // })
        // .createTable('buyer', buyer => {
        //     buyer.increments('buyer_id');
        //     buyer.string('name', 255);
        // })
        // .createTable('products', product => {
        //     product.increments('product_id');
        //     product.string('name', 255);
        //     product.string('price', 2);
        //     product.integer('seller_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('seller_id')
        //         .inTable('seller')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        //     product.integer('amount');
        // })
        // .createTable('shoppingCart', cart => {
        //     cart.increments('cart_id');
        //     cart.integer('buyer_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('buyer_id')
        //         .inTable('buyer')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        //     cart.integer('product_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('product_id')
        //         .inTable('products')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE');
        // })


};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('shoppingCart')
        .dropTableIfExists('products')
        .dropTableIfExists('buyer')
        .dropTableIfExists('seller')
        .dropTableIfExists('users')

};