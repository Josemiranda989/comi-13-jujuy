module.exports = (sequelize, DataTypes) => {
  const alias = "Product";

  const cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  };

  const config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  // Asociaciones
  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "categories",
      foreignKey: "categoryId",
    });
  };

  return Product;
};
