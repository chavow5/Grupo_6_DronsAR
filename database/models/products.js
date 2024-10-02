'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Para usar UUID como identificador único
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duracionBateria: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    camara: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipoSensores: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    velocidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'default.png',
      allowNull: true,
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
    tableName: 'products', // Nombre de la tabla en la base de datos
  underscored: false, // Para evitar el formato de campos con guiones bajos
  timestamps: true, // Habilitar la gestión automática de createdAt y updatedAt
  });

  return Product;
};
