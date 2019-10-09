
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(tbl) {
        tbl.increments();
        tbl.string('VIN', 128).notNullable();
        tbl.string('Model', 62).notNullable();
        tbl.string('Make', 64).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  