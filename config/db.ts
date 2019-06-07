import {Sequelize} from "sequelize";

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/xnxdb`);

export default sequelize;