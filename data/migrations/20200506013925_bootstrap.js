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
      tbl.string("nameFive", 255).notNullable();
      tbl.string("descriptionFive").notNullable();
      tbl.string("nameFour", 255).notNullable();
      tbl.string("descriptionFour").notNullable();
      tbl.string("nameThree", 255).notNullable();
      tbl.string("descriptionThree").notNullable();
      tbl.string("nameTwo", 255).notNullable();
      tbl.string("descriptionTwo").notNullable();
      tbl.string("name", 255).notNullable();
      tbl.string("description").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("lists");
};
