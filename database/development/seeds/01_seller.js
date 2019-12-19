exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { farm_name: "berry's farm", location: 'fremont, CA' },
                { farm_name: "berry's farm", location: 'fremont, CA' },
                { farm_name: "berry's farm", location: 'fremont, CA' }
            ]);
        });
};