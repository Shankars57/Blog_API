import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
 process.env.APP_DB_URL,
  {

    dialect: "postgres",
    logging: false,
  }
);
