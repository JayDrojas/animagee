'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    imageId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId"})
    Comment.belongsTo(models.Image, { foreignKey: "imageId"})
  };
  return Comment;
};
