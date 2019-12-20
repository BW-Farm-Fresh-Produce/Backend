exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('seller').del()
        .then(function() {
            // Inserts seed entries
            return knex('seller').insert([
                { farm_name: "berry's farm", location: 'fremont, CA' },
                { farm_name: "berry's farm", location: 'fremont, CA' },
                { farm_name: "berry's farm", location: 'fremont, CA' }
            ]);
        });
};