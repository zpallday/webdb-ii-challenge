
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(tbl) {
      tbl.increments();
      tbl.integer('Vin').notNullable();
      tbl.string('make',24).notNullable();
      tbl.string('model').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
