import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: "authors",
    timestamps: true
  }
);
