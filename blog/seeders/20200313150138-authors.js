'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('authors', [{
        name: 'Jaye',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Austin',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Molly',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
