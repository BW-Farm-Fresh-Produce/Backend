exports.up = function (knex) {
    return knex.schema
        .createTable('users', user => {
            user.increments('farmer_id');
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
            product.string('product_name', 255)
                .notNullable();
            product.string('price')
                .notNullable();
            product.string('quantity')
                .notNullable();
            product.integer('farmer_id')
                .unsigned()
                .notNullable()
                .references('farmer_id')
                .inTable('schemes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('products')
        .dropTableIfExists('users')


};