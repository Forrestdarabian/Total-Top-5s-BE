exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").unique().notNullable();
      tbl.string("password").notNullable();
    })
    .createTable("lists", (tbl) => {
      tbl.increments();
      tbl.string("category", 255).notNullable();
      tbl.string("subcategory", 255).notNullable();

      tbl.string("name", 255).notNullable();

      tbl.string("description").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("lists");
};
