exports.up = function (knex) {
  return knex.schema.createTable("articles", function (table) {
    table.increments("id");
    table.string("articleId").notNullable();
    table.string("userId").notNullable();
    table.string("vehicleId").notNullable();
    table.decimal("publicationDate").notNullable();
    table.string("brandId").notNullable();
    table.string("modelId").notNullable();
    table.string("generationId").notNullable();
    table.decimal("likes").notNullable();
    table.decimal("comments").notNullable();
    table.decimal("engine");
    table.decimal("wheeldrive");
    table.decimal("transmission");
    table.decimal("about");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("articles");
};
