exports.seed = function(knex) {

    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            {Vin: 423423, make: 'honda', model: 'Clvic' },
            {Vin: 324324, make: 'Ford', model: 'Mustang'},
            {Vin: 675675, make: 'dodge', model: 'charger'},
        ])
    })
}