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
      field: 'profileImage' // Mapeo a la columna 'profileImage' en la base de datos
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt', // Mapeo a la columna 'createdAt' en la base de datos
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt', // Mapeo a la columna 'updatedAt' en la base de datos
    },
  }, {
    tableName: 'users', // Asegúrate de que el nombre de la tabla sea correcto
    underscored: false, // No usar underscored ya que estás usando camelCase
  });
  return User;
};