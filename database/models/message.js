'use strict';

module.exports = (sequelize, DataTypes) => {
  const Mensaje = sequelize.define('Mensaje', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    asunto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: { // Cambiado a created_at
      type: DataTypes.DATE,
      field: 'created_at', // Asegúrate de que este campo coincida con el de la base de datos
      defaultValue: DataTypes.NOW,
    },
    updated_at: { // Cambiado a updated_at
      type: DataTypes.DATE,
      field: 'updated_at', // Asegúrate de que este campo coincida con el de la base de datos
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'messages',
    timestamps: true,
    underscored: true, // Esto asegura que Sequelize use el formato snake_case
  });
  return Mensaje;
};