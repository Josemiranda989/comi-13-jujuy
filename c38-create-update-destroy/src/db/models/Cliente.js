module.exports = (sequelize, DataTypes) => {
    const alias = "Cliente"
    const cols = {
        apellido: {
            type: DataTypes.STRING(12)
        },
        empresa: {
            type: DataTypes.STRING(48)
        },
        pais: {
            type: DataTypes.STRING(14)
        },
        codigo_postal: {
            type: DataTypes.STRING(10)
        },
        telefono: {
            type: DataTypes.STRING(19)
        }
    }
    const config = {
        tableName: "clientes",
        timestamps: false,
    }

    const Cliente = sequelize.define(alias, cols, config)

    return Cliente
}