'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('image', {
    page: DataTypes.STRING,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    episode_id: DataTypes.INTEGER,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return image;
};