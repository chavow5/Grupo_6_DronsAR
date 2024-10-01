'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      defaultValue: 'default.png',
      field: 'profileImage' 
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt', 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt',
    },
  }, {
    tableName: 'users', 
    underscored: false, 
  });
  return User;
};