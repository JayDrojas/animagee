'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [{
     userId: 1,
     content: "This is a dope pic",
     imageId: 3,
   },
   {
    userId: 1,
    content: "Fire!",
    imageId: 6,
  },
   {
    userId: 2,
    content: "Nice",
    imageId: 1,
  },
  {
    userId: 2,
    content: "Dope",
    imageId: 8,
  },
  {
    userId: 3,
    content: "I love this anime!",
    imageId: 2,
  },
  {
    userId: 3,
    content: "Awesome!",
    imageId: 4,
  },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
