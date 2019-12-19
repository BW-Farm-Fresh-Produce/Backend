exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('products').del()
        .then(function() {
            // Inserts seed entries
            return knex('products').insert([
                { name: "carrots", price: "$ 2.76", amount: 10, seller_id: 1 },
                { name: "starwberries", price: "$ 2.76", amount: 10, seller_id: 1 },
                { name: "cabbage", price: "$ 2.76", amount: 10, seller_id: 1 }
            ]);
        });
};