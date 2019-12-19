exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('buyer').del()
        .then(function() {
            // Inserts seed entries
            return knex('buyer').insert([
                { name: 'Britney' },
                { name: 'Justin Timberlake' },
                { name: 'Drake' }
            ]);
        });
};