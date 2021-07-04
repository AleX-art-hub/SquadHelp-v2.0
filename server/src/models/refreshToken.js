'use strict';
const {Model} = require('sequelize');
const { sequelize } = require('.');
const { refreshAuth } = require('../controllers/authController');
module.exports = (sequelize, DataTypes) => {
    class RefreshToken extends Model{
        static associate(model){
            RefreshToken.belongsTo(User, {
                foreignKey: 'userId',
            });
        }
    }
    RefreshToken.init({
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
            },
            
        },
        token: {
            type: DataTypes.TEXT,
            unique: true,
        },
        userAgent: DataTypes.STRING,
        fingerprint: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'RefreshToken',
    });
    return RefreshToken;
};