module.exports = (sequelize, DataTypes) => {
    const alias = "Artista";
    const cols = {
        nombre: {
            type: DataTypes.STRING(85)
        }
    }
    const config = {
        tableName: "artistas",
        timestamps: false,
    }
    const Artista = sequelize.define(alias, cols, config)

    return Artista;
}