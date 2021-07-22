const { Model, DataTypes } = require("sequelize");
//const bycrpt = require('bcrypt');
const sequelize = require("../config/connection");

class User extends Model {
    //This is where we will check password
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },
    },
    {
        //hooks:{
        // beforeCreate: hash password and return data
        //beforeUpdate:  hash password and return data
        //}
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
)

module.exports = User;