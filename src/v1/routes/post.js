const express = require("express");
const router = express.Router();
const {
  getPosts,
  getOnePost,
  getPostsFromOneUser,
  createNewPost,
  createNewDraft,
  updatePost,
  deletePost,
  hidenPostUsers,
  publishDraft,
  deletePostsUser,
} = require("../../controllers/postControllers");

router
  .get("/", getPosts)
  .get("/:postId", getOnePost)
  .get("/:userID", getPostsFromOneUser)
  .post("/", createNewPost)
  .post("/draft", createNewDraft)
  .put("/update", updatePost)
  .delete("/delete/:postId", deletePost)
  .delete("/delete/:userId", deletePostsUser)
  .put("/hiden/:postId", hidenPostUsers)
  .put("/draft/:postId", publishDraft);

module.exports = router;
