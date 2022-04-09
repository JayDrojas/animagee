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
      content: "Sasuke",
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
    {
      userId: "5",
      imageUrl: "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg",
      albumId: "4",
      content: "Goku",
    },
    {
      userId: "5",
      imageUrl: "https://wallpapercave.com/wp/wp3763146.jpg",
      albumId: "3",
      content: "Goku",
    },
    {
      userId: "6",
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/2/29/GotenNV.png/revision/latest?cb=20191108050056",
      albumId: "3",
      content: "Goten",
    },
    {
      userId: "6",
      imageUrl: "https://dragonball.guru/wp-content/uploads/2021/01/trunks-goten-fusion-dragon-ball-super-824x490.jpg",
      albumId: "4",
      content: "Goten",
    },
    {
      userId: "7",
      imageUrl: "https://i.ytimg.com/vi/Vk_WYLjQ-c8/maxresdefault.jpg",
      albumId: "3",
      content: "Asta",
    },
    {
      userId: "7",
      imageUrl: "https://pbs.twimg.com/media/EuC82LXWgAApial.jpg",
      albumId: "3",
      content: "Asta",
    },
    {
      userId: "8",
      imageUrl: "https://i.pinimg.com/736x/31/35/ec/3135ec7025848a111703fc8336c673e8.jpg",
      albumId: "3",
      content: "Naruto",
    },
    {
      userId: "8",
      imageUrl: "https://knightmahajan.files.wordpress.com/2017/03/wp-1490262671774.jpg",
      albumId: "3",
      content: "Naruto",
    },
    {
      userId: "9",
      imageUrl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/11/Featured-Image-Brock-and-His-Drying-Pan-Cropped.jpg",
      albumId: "3",
      content: "Brock",
    },
    {
      userId: "9",
      imageUrl: "https://cdn.vox-cdn.com/thumbor/Rjj4TUfufCSv1cG6pzwiODBVqzY=/0x0:776x439/1200x800/filters:focal(326x158:450x282)/cdn.vox-cdn.com/uploads/chorus_image/image/56858305/DJ2Ol5qUQAE6UgI.0.jpg",
      albumId: "3",
      content: "Brock",
    },
    {
      userId: "10",
      imageUrl: "http://4.bp.blogspot.com/-tZKRo1MDFoc/VtPVo5SDomI/AAAAAAAAKSE/XfwU5BiZ-_Y/s1600/%2528Ozzy%2BOsbourne-You%2527re%2BNo%2BDifferent%2529.png",
      albumId: "3",
      content: "Charmander",
    },
    {
      userId: "10",
      imageUrl: "https://staticg.sportskeeda.com/editor/2022/03/ca484-16469515671851-1920.jpg",
      albumId: "3",
      content: "Charmander",
    },
    {
      userId: "11",
      imageUrl: "https://sportshub.cbsistatic.com/i/2021/03/18/de2f8842-7765-43a5-914b-9899f723b507/black-clover-yami-episode-151-anime-1244310.jpg",
      albumId: "3",
      content: "Yami",
    },
    {
      userId: "11",
      imageUrl: "https://i.pinimg.com/originals/a3/44/35/a344359c6182d8df1c222b00e7854309.jpg",
      albumId: "3",
      content: "Yami",
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
