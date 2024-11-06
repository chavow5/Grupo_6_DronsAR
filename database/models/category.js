'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'categories',
    timestamps: true,
    underscored: true,
  });

  // Relación con Product
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignKey: 'category_id',
      as: 'products',
    });
  };

  return Category;
};
