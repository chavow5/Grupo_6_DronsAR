'use strict';

module.exports = (sequelize, DataTypes) => {
  const Mensaje = sequelize.define('Mensaje', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'createdAt', // Usa el nombre en la base de datos
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedAt', // Añade este campo si deseas que se actualice automáticamente
    }
  }, {
    tableName: 'messages', // Nombre de la tabla
    underscored: true, // Usa formato de nombre de columna subrayado
    timestamps: true, // Habilita marcas de tiempo para createdAt y updatedAt
  });

  return Mensaje;
};
