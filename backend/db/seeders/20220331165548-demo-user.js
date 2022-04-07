'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'ash@user.io',
        username: 'FakeUserAsh',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'gojo@user.io',
        username: 'FakeUserGojo',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'Deku@user.io',
        username: 'FakeUserDeku',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
