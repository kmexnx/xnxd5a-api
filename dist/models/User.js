"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../config/db");
var sequelize_1 = require("sequelize");
var User = db_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    first_name: sequelize_1.DataTypes.STRING,
    last_name: sequelize_1.DataTypes.STRING,
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    password: sequelize_1.DataTypes.STRING(500),
    role: sequelize_1.DataTypes.STRING(200),
    birthday: sequelize_1.DataTypes.DATE,
    lastLogin: sequelize_1.DataTypes.DATE,
    profilePicture: sequelize_1.DataTypes.STRING
}, { modelName: 'user' });
module.exports = User;
/* ES6 WAY */
/*export class User extends Model{}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING(500),
  
},{sequelize, modelName:'user'});*/
// User.sync({force: false}).then(function (err) { if(err) { console.log('An error occur while creating table'); } else{ console.log('Item table created successfully'); } });
//# sourceMappingURL=User.js.map