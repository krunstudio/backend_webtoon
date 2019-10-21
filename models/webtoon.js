'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return webtoon;
};