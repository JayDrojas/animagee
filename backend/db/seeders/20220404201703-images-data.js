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
      imageUrl: "https://media.comicbook.com/2021/01/boruto-manga-chapter-54-spoilers-sasuke-eye-injury-sharingan-rin-1253618.jpeg?auto=webp",
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
      imageUrl: "https://i.ytimg.com/vi/w0gKtZQL2KY/maxresdefault.jpg",
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
    {
      userId: "12",
      imageUrl: "https://cloudedanime.files.wordpress.com/2016/10/dragon-ball-super-060-07-young-trunks.jpg",
      albumId: "3",
      content: "Trunks",
    },
    {
      userId: "12",
      imageUrl: "https://dragonball.guru/wp-content/uploads/2021/07/How-Old-Is-Future-Trunks.jpg",
      albumId: "3",
      content: "Trunks",
    },
    {
      userId: "13",
      imageUrl: "https://otakukart.com/wp-content/uploads/2021/08/SASUKE-UCHIHA-AGE.jpg",
      albumId: "3",
      content: "Sasuke",
    },
    {
      userId: "13",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a969e494-a6a9-4e2e-b7b4-81479c752316/dbv7kqm-4780381f-330a-4405-abaf-fa6433f05da7.png/v1/fill/w_1240,h_644,strp/mmd_sasuke_uchiha_pack__dl_by_narashadows_dbv7kqm-pre.png",
      albumId: "3",
      content: "Sasuke",
    },
    {
      userId: "14",
      imageUrl: "https://www.denofgeek.com/wp-content/uploads/2020/11/webstory-deadpool-image06-1.jpg?fit=1170%2C780",
      albumId: "3",
      content: "Deadpool",
    },
    {
      userId: "14",
      imageUrl: "https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/screenshots/csm-movie/deadpool-2.jpg",
      albumId: "3",
      content: "Reading",
    },
    {
      userId: "16",
      imageUrl: "https://static.skillshare.com/cdn-cgi/image/quality=80,width=1000,format=auto/uploads/project/5eec4b1f0e277ef185a2acc8ab224add/8af4cf0e",
      albumId: "3",
      content: "Young Killua",
    },
    {
      userId: "16",
      imageUrl: "https://i.pinimg.com/originals/1c/31/53/1c3153edda3c41aa1de32b2c6acb6fcf.jpg",
      albumId: "3",
      content: "Killua",
    },
    {
      userId: "17",
      imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Adult-Gon-Featured.jpg",
      albumId: "3",
      content: "Gon",
    },
    {
      userId: "17",
      imageUrl: "https://i.pinimg.com/originals/71/ca/07/71ca07d99f84421601f135494224d022.png",
      albumId: "3",
      content: "Gon",
    },
    {
      userId: "18",
      imageUrl: "https://w0.peakpx.com/wallpaper/548/308/HD-wallpaper-levi-ackerman-levi-ackerman-naruto-thumbnail.jpg",
      albumId: "3",
      content: "Levi",
    },
    {
      userId: "18",
      imageUrl: "https://images.gmanews.tv/webpics/2020/09/attack_on_titan_2020_09_23_07_28_05.jpg",
      albumId: "3",
      content: "Levi",
    },
    {
      userId: "19",
      imageUrl: "https://www.theanimedaily.com/wp-content/uploads/2021/10/Why-Did-Itachi-Kill-the-Uchiha-Clan-1-1024x576.jpg",
      albumId: "3",
      content: "Itachi",
    },
    {
      userId: "19",
      imageUrl: "https://staticg.sportskeeda.com/editor/2022/03/57491-16477985345423-1920.jpg",
      albumId: "3",
      content: "Sad",
    },
    {
      userId: "20",
      imageUrl: "https://media.comicbook.com/2020/04/one-piece-wano-straw-hats-anime-1178092-1216282.jpeg?auto=webp",
      albumId: "3",
      content: "The Squad",
    },
    {
      userId: "20",
      imageUrl: "https://sportshub.cbsistatic.com/i/2021/08/09/1019d319-07cf-4d28-8b65-51490d9d5f28/one-piece-straw-hats-wano-jinbe-welcoming-promise-1276089.jpg",
      albumId: "3",
      content: "The Squad",
    },
    {
      userId: "21",
      imageUrl: "https://preview.redd.it/hubpl8vk6wn11.jpg?auto=webp&s=2d37e9fff42ce785a23916f386151e8cb94b8fe8",
      albumId: "3",
      content: "Gos Usopp",
    },
    {
      userId: "21",
      imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Sogeking-and-God-Usopp-in-One-Piece.jpg",
      albumId: "3",
      content: "The Man, the Myth, the legend",
    },
    {
      userId: "22",
      imageUrl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/02/One-Punch-Man-Saitama-Strength-Power.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5",
      albumId: "3",
      content: "One punch is all it takes",
    },
    {
      userId: "22",
      imageUrl: "https://staticg.sportskeeda.com/editor/2021/12/3a013-16385552609842-1920.jpg",
      albumId: "3",
      content: "One punch is all it takes",
    },
    {
      userId: "23",
      imageUrl: "https://3aws3g15i5812mz28r3dqig1-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Zoro-Lost-Enies-Lobby.jpg",
      albumId: "3",
      content: "always lost",
    },
    {
      userId: "23",
      imageUrl: "https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg",
      albumId: "3",
      content: "always lost",
    },
    {
      userId: "24",
      imageUrl: "https://cdnb.artstation.com/p/assets/images/images/016/691/863/large/jacob-noble-mikasa-01-01.jpg?1555160545",
      albumId: "3",
      content: "Mikasa",
    },
    {
      userId: "24",
      imageUrl: "https://c.tenor.com/ZPyVOtzLYzsAAAAC/mikasa-ackerman-mikasa-season4.gif",
      albumId: "3",
      content: "Mikasa",
    },
    {
      userId: "25",
      imageUrl: "https://www.geekmi.news/__export/1631125129102/sites/debate/img/2021/09/08/ereh9.jpg_415429280.jpg",
      albumId: "3",
      content: "Mikasa",
    },
    {
      userId: "25",
      imageUrl: "https://d.newsweek.com/en/full/1955557/attack-titan.jpg",
      albumId: "3",
      content: "Mikasa",
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
