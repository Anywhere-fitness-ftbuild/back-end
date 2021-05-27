exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1, 
            username: 'Deez_youknowhatitis',
            first_name: 'Deez',
            last_name: 'Knuts',
            email: 'Droppineminyamouth@gmail.com',
            password: '123456789',
            role: 'instructor',
            didVisit: false
          },
        ]);
      });
  };
  