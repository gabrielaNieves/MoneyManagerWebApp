module.exports = (sequelize, DataTypes) => {
    let alias = 'Account'; 
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: 'account'
    }
    const Account = sequelize.define(alias,cols,config);

    Account.associate = function(models){  
    Account.belongsTo(models.User,{
        as: "user",
        foreignKey: {
            name: "user_id", // the JavaScript attribute name
            field: "user_id", // the column name
        }
    })
    Account.hasMany(models.Transaction,{
        as: "transactions",
        foreignKey: {
            name: "account_id", // the JavaScript attribute name
            field: "account_id", // the column name
        }
    })

    }
    return Account
}