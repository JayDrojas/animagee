'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
    { 
      userId: "1",
      imageUrl: "https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg",
      albumId: "1",
      content: "Tanjiro",
    },
    { 
      userId: "1",
      imageUrl: "https://www.denofgeek.com/wp-content/uploads/2016/04/one_punch_man_ok.jpg?resize=620%2C382",
      albumId: "1",
      content: "Saitama",
    },
    { 
      userId: "2",
      imageUrl: "http://m.gettywallpapers.com/wp-content/uploads/2021/01/Cool-Anime-Wallpaper.jpg",
      albumId: "2",
      content: "Deku",
    },
    { 
      userId: "2",
      imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg",
      albumId: "2",
      content: "Yuta",
    },
    { 
      userId: "3",
      imageUrl: "https://cdn.vox-cdn.com/thumbor/XECSqs9FPjW3bL8JnZVWhtWnQWU=/0x0:1400x788/1520x1013/filters:focal(588x282:812x506):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png",
      albumId: "3",
      content: "Luffy",
    },
    { 
      userId: "3",
      imageUrl: "https://qph.fs.quoracdn.net/main-qimg-80b122ab914e44400a865eccbdd5bbf6",
      albumId: "3",
      content: "Gojo",
    },
    { 
      userId: "4",
      imageUrl: "https://assets-prd.ignimgs.com/2021/09/09/jujutsu-1631147389461.jpg?width=3840",
      albumId: "4",
      content: "Itadori",
    },
    { 
      userId: "4",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8iv6SiphnUMFgk-wbPq5b7mNeL2pgL5uJw&usqp=CAU",
      albumId: "4",
      content: "Gon",
    },
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
