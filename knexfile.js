// Update with your config settings.

module.exports = {

     development: {
       client: "sqlite3",
       connection: {
         filename: "./database/development/freshFarms.db3"
       },
       useNullAsDefault: true,
       pool: {
         afterCreate: (conn, done) => {
           conn.run("PRAGMA foreign_keys = ON", done);
         }
       },
       migrations: {
         directory: "./database/development/migrations"
       },
       seeds: {
         directory: "./database/development/seeds"
       }
     },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
