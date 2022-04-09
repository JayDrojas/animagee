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
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'gojo@user.io',
        username: 'FakeUserGojo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Deku@user.io',
        username: 'FakeUserDeku',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Goku@user.io',
        username: 'FakeUserGoku',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Goten@user.io',
        username: 'FakeUserGoten',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Asta@user.io',
        username: 'FakeUserAsta',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Naruto@user.io',
        username: 'FakeUserNaruto',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Brock@user.io',
        username: 'FakeUserBrock',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Charmander@user.io',
        username: 'FakeUserCharmander',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Yami@user.io',
        username: 'FakeUserCaptainYami',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Trunks@user.io',
        username: 'FakeUserTrunks',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Sasuke@user.io',
        username: 'FakeUserSasuke',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Deadpool@user.io',
        username: 'FakeUserDeadpool',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'DrStrange@user.io',
        username: 'FakeUserDrStrange',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Killua@user.io',
        username: 'FakeUserKillua',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Gon@user.io',
        username: 'FakeUserGon',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Hisoka@user.io',
        username: 'FakeUserHisoka',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Levi@user.io',
        username: 'FakeUserLevi',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Light@user.io',
        username: 'FakeUserLight',
        hashedPassword: bcrypt.hashSync('password')
      },
      // {
      //   email: 'Itachi@user.io',
      //   username: 'FakeUserItachi',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'Luffy@user.io',
      //   username: 'FakeUserLuffy',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'GodUssop@user.io',
      //   username: 'FakeUserGodUssop',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'Saitama@user.io',
      //   username: 'FakeUserSaitama',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'Zoro@user.io',
      //   username: 'FakeUserZoro',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'Mikasa@user.io',
      //   username: 'FakeUserMikasa',
      //   hashedPassword: bcrypt.hashSync('password')
      // },
      // {
      //   email: 'Eren@user.io',
      //   username: 'FakeUserEren',
      //   hashedPassword: bcrypt.hashSync('password')
      // }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
