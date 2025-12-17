import express from "express";
import { Author } from "../models/Author.js";
import { Post } from "../models/Post.js";

const router = express.Router();

// Create author
router.post("/", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all authors
router.get("/", async (_req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
});

// Get author by ID
router.get("/:id", async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.sendStatus(404);
  res.json(author);
});

// Update author
router.put("/:id", async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.sendStatus(404);

  await author.update(req.body);
  res.json(author);
});

// Delete author (cascade deletes posts)
router.delete("/:id", async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.sendStatus(404);

  await author.destroy();
  res.sendStatus(204);
});

// Get posts by author
router.get("/:id/posts", async (req, res) => {
  const posts = await Post.findAll({
    where: { author_id: req.params.id }
  });
  res.json(posts);
});

export default router;
