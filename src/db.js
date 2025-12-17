import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.APP_DB_NAME,
  process.env.APP_DB_USER,
  process.env.APP_DB_PASSWORD || "shankar" || "Shankar",
  {
    host: process.env.APP_DB_HOST,
    port: Number(process.env.APP_DB_PORT),
    dialect: "postgres",
    logging: false,
  }
);
