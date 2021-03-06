
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments()
        tbl.string("username").notNullable().unique()
        tbl.string("first_name").notNullable()
        tbl.string("last_name").notNullable()
        tbl.string("email").notNullable()
        tbl.string("password").notNullable()
        tbl.string("role", 10).notNullable()
        tbl.boolean('didVisit')
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
};
