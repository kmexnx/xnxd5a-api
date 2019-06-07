
import sequelize from "../config/db";

import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
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
}, {modelName:'user'});

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