module.exports = (sequelize, DataTypes) => {
    let alias = 'Category'; 
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
        ,typeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: 'category'
    }
    const Category = sequelize.define(alias,cols,config);

    Category.associate = function(models){
    Category.hasMany(models.Transaction,{
        as: "operations",
        foreignKey: {
            name: "category_id", // the JavaScript attribute name
            field: "category:id", // the column name
        }
    })
    }
    
    return Category
}