module.exports = (sequelize, DataTypes) => {
    let alias = 'Transaction';
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        money: {
            type: DataTypes.DECIMAL(65,2),
            allowNull: false
        },
        date:{ 
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'transaction'
    }
    const Transaction = sequelize.define(alias,cols,config);

    Transaction.associate = function(models){
        Transaction.belongsTo(models.Account,{
            as: "account",
            foreignKey: {
                name: "account_id", // the JavaScript attribute name
                field: "account_id", // the column name
            }
        })
    }

    return Transaction
}