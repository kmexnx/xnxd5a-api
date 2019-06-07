"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize("postgres://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@localhost:5432/xnxdb");
exports.default = sequelize;
//# sourceMappingURL=db.js.map