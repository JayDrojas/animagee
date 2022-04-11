'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [{
     userId: 7,
     content: "This is a dope pic",
     imageId: 1,
   },
   {
    userId: 2,
    content: "Fire!",
    imageId: 1,
  },
   {
    userId: 3,
    content: "Nice",
    imageId: 1,
  },
  {
    userId: 4,
    content: "Dope",
    imageId: 1,
  },
  {
    userId: 5,
    content: "I love this anime!",
    imageId: 1,
  },
  {
    userId: 6,
    content: "Awesome!",
    imageId: 1,
  },


  {
    userId: 7,
    content: "This is a dope pic",
    imageId: 2,
  },
  {
   userId: 2,
   content: "Fire!",
   imageId: 2,
 },
  {
   userId: 3,
   content: "Nice",
   imageId: 2,
 },
 {
   userId: 4,
   content: "Dope",
   imageId: 2,
 },
 {
   userId: 5,
   content: "I love this anime!",
   imageId: 2,
 },
 {
   userId: 6,
   content: "Awesome!",
   imageId: 2,
 },


 {
  userId: 1,
  content: "This is a dope pic",
  imageId: 3,
},
{
 userId: 7,
 content: "Fire!",
 imageId: 3,
},
{
 userId: 3,
 content: "Nice",
 imageId: 3,
},
{
 userId: 4,
 content: "Dope",
 imageId: 3,
},
{
 userId: 5,
 content: "I love this anime!",
 imageId: 3,
},
{
 userId: 6,
 content: "Awesome!",
 imageId: 3,
},


{
  userId: 1,
  content: "This is a dope pic",
  imageId: 4,
},
{
 userId: 7,
 content: "Fire!",
 imageId: 4,
},
{
 userId: 3,
 content: "Nice",
 imageId: 4,
},
{
 userId: 4,
 content: "Dope",
 imageId: 4,
},
{
 userId: 5,
 content: "I love this anime!",
 imageId: 4,
},
{
 userId: 6,
 content: "Awesome!",
 imageId: 4,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 5,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 5,
},
{
 userId: 7,
 content: "Nice",
 imageId: 5,
},
{
 userId: 4,
 content: "Dope",
 imageId: 5,
},
{
 userId: 5,
 content: "I love this anime!",
 imageId: 5,
},
{
 userId: 6,
 content: "Awesome!",
 imageId: 5,
},


{
  userId: 1,
  content: "This is a dope pic",
  imageId: 6,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 6,
},
{
 userId: 7,
 content: "Nice",
 imageId: 6,
},
{
 userId: 4,
 content: "Dope",
 imageId: 6,
},
{
 userId: 5,
 content: "I love this anime!",
 imageId: 6,
},
{
 userId: 6,
 content: "Awesome!",
 imageId: 6,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 7,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 7,
},
{
 userId: 3,
 content: "Nice",
 imageId: 7,
},
{
 userId: 7,
 content: "Dope",
 imageId: 7,
},
{
 userId: 5,
 content: "I love this anime!",
 imageId: 7,
},
{
 userId: 6,
 content: "Awesome!",
 imageId: 7,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 8,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 8,
},
{
 userId: 3,
 content: "Nice",
 imageId: 8,
},
{
 userId: 7,
 content: "Dope",
 imageId: 8,
},
{
 userId: 5,
 content: "I love this anime!",
 imageId: 8,
},
{
 userId: 6,
 content: "Awesome!",
 imageId: 8,
},


{
  userId: 1,
  content: "This is a dope pic",
  imageId: 9,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 9,
},
{
 userId: 3,
 content: "Nice",
 imageId: 9,
},
{
 userId: 7,
 content: "Dope",
 imageId: 9,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 9,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 9,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 10,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 10,
},
{
 userId: 3,
 content: "Nice",
 imageId: 10,
},
{
 userId: 7,
 content: "Dope",
 imageId: 10,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 10,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 10,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 11,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 11,
},
{
 userId: 3,
 content: "Nice",
 imageId: 11,
},
{
 userId: 7,
 content: "Dope",
 imageId: 11,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 11,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 11,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 12,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 12,
},
{
 userId: 3,
 content: "Nice",
 imageId: 12,
},
{
 userId: 7,
 content: "Dope",
 imageId: 12,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 12,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 12,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 13,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 13,
},
{
 userId: 3,
 content: "Nice",
 imageId: 13,
},
{
 userId: 7,
 content: "Dope",
 imageId: 13,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 13,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 13,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 14,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 14,
},
{
 userId: 3,
 content: "Nice",
 imageId: 14,
},
{
 userId: 7,
 content: "Dope",
 imageId: 14,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 14,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 14,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 15,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 15,
},
{
 userId: 3,
 content: "Nice",
 imageId: 15,
},
{
 userId: 7,
 content: "Dope",
 imageId: 15,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 15,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 15,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 16,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 16,
},
{
 userId: 3,
 content: "Nice",
 imageId: 16,
},
{
 userId: 7,
 content: "Dope",
 imageId: 16,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 16,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 16,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 17,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 17,
},
{
 userId: 3,
 content: "Nice",
 imageId: 17,
},
{
 userId: 7,
 content: "Dope",
 imageId: 17,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 17,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 17,
},


{
  userId: 1,
  content: "This is a dope pic",
  imageId: 18,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 18,
},
{
 userId: 3,
 content: "Nice",
 imageId: 18,
},
{
 userId: 7,
 content: "Dope",
 imageId: 18,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 18,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 18,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 19,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 19,
},
{
 userId: 3,
 content: "Nice",
 imageId: 19,
},
{
 userId: 7,
 content: "Dope",
 imageId: 19,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 19,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 19,
},

{
  userId: 1,
  content: "This is a dope pic",
  imageId: 20,
},
{
 userId: 2,
 content: "Fire!",
 imageId: 20,
},
{
 userId: 3,
 content: "Nice",
 imageId: 20,
},
{
 userId: 7,
 content: "Dope",
 imageId: 20,
},
{
 userId: 6,
 content: "I love this anime!",
 imageId: 20,
},
{
 userId: 7,
 content: "Awesome!",
 imageId: 20,
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
