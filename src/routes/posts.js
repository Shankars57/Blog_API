import express from "express";
import { Post } from "../models/Post.js";
import { Author } from "../models/Author.js";

const router = express.Router();

// Create post
router.post("/", async (req, res) => {
  const { author_id } = req.body;

  const author = await Author.findByPk(author_id);
  if (!author) {
    return res.status(400).json({ error: "Invalid author_id" });
  }

  const post = await Post.create(req.body);
  res.status(201).json(post);
});

// Get all posts (optional filter)
router.get("/", async (req, res) => {
  const filter = req.query.author_id ? { author_id: req.query.author_id } : {};

  const posts = await Post.findAll({
    where: filter,
    include: Author,
  });

  res.json(posts);
});

// Get post by ID
router.get("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id, {
    include: Author,
  });

  if (!post) return res.sendStatus(404);
  res.json(post);
});

// Update post
router.put("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.sendStatus(404);

  await post.update(req.body);
  res.json(post);
});

// Delete post
router.delete("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.sendStatus(404);

  await post.destroy();
  res.sendStatus(204);
});

export default router;
