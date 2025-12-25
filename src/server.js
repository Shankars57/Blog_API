import "./env.js";
import express from "express";
import { sequelize } from "./db.js";

import authorRoutes from "./routes/authors.js";
import postRoutes from "./routes/posts.js";

const app = express();
const PORT = process.env.APP_PORT || 8080;

app.use(express.json());
app.use("/authors", authorRoutes);
app.use("/posts", postRoutes);

app.get("/",(req,res)=>{
  res.send("Hello world");
});


(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
})();
