module.exports = (sequelize, DataTypes) => {
  const alias = "Category";

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
  };

  const config = {
    tableName: "categories",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);

  // Asociaciones
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      as: "games",
      foreignKey: "categoryId",
    });
  };

  return Category;
};
