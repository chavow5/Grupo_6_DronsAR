'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories', // Nombre de la tabla `categories`
        key: 'id'
      }
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
    tableName: 'products',
  timestamps: true, // Esto habilita createdAt y updatedAt
});

  // Definir la relación con Category
  Product.associate = models => {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  };

  return Product;
};
