import Express from "express";
import mongoose from "mongoose";
import Post from "../db/posts.js";

const router = Express.Router();
//'localhost:5000 e istek atinca ne olacagini belirliyoruz'
router.get("/", async (req, res) => {
  /*
  res.json({
    msg: "this is a get req",
  });
  */
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  /*
  res.json({
    msg: "this is a get req for one id",
  });
  */
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) return;
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", async (req, res) => {
  /*
  res.json({
    msg: "this is a post req",
  });
  */

  try {
    const post = req.body;
    const createdPost = await Post.create(post);
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id", async (req, res) => {
  /*
  res.json({
    msg: "this is a update req",
  });
  */
  try {
    const { id } = req.params;
    const { title, content, creator } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("post is not found");
    const updatedPost = { title, content, creator, _id: id };
    await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id", async (req, res) => {
  /*
  res.json({
    msg: "this is a delete req",
  });
  */
  try {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
  }
});

export default router;
