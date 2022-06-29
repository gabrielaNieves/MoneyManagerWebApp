module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email:{ 
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'user'
    }
    const User = sequelize.define(alias,cols,config);

    User.associate = function(models){
        User.hasOne(models.Account,{
            as: "addAccount",
            foreignKey: {
                name: "user_id", // the JavaScript attribute name
                field: "user_id", // the column name
              }
        })
    }


    return User
}