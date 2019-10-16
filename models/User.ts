'use strict';

import sequelize from "../config/db";
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  username: DataTypes.STRING
}, {});


module.exports = User;

