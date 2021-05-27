exports.seed = function(knex) {
    return knex('instructorCode').truncate()
      .then(function () {
        return knex('instructorCode').insert([
          {
            instructorCode: 'password'
          },
        ]);
      });
  };
  