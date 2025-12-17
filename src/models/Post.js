import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Author } from "./Author.js";

export const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

// Relationships
Author.hasMany(Post, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Post.belongsTo(Author, {
  foreignKey: "author_id",
});
