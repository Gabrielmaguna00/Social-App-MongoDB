const services = require("../services/postService.js");

const getPosts = async (req, res) => {
  try {
    const posts = await services.getPosts();
    res.json({ status: "resource geted successfully!", data: posts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await services.getOnePost(postId);
    res.json({ status: "resource geted successfully!", data: post });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const getPostsFromOneUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const userPosts = await services.getPostsFromOneUser(userID);
    res.json({ status: "resource geted successfully!", data: userPosts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const createNewPost = async (req, res) => {
  try {
    const { title, content, category, userId } = req.body;
    if (!title || !content || !category || !userId) {
      res.status(400).json({ status: "Erro", reason: "Bad request" });
    } else {
      const post = await services.createNewPost(
        title.toLowerCase(),
        content.toLowerCase(),
        category.toLowerCase(),
        userId
      );
      res.json({ status: "resource created successfully!", data: post });
    }
  } catch (error) {
    console.log(error);
    res.status(201).status(404).json({ status: "error", err: error });
  }
};

const createNewDraft = async (req, res) => {
  try {
    const { title, content, category, userId } = req.body;
    if (!title || !content || !category || !userId) {
      res.status(400).json({ status: "Erro", reason: "Bad request" });
    } else {
      const draft = await services.createNewDraft(
        title.toLowerCase(),
        content.toLowerCase(),
        category.toLowerCase(),
        userId
      );
      res
        .status(201)
        .json({ status: "resource created successfully!", data: draft });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content, category, postId } = req.body;
    const post = await services.updatePost(title, content, category, postId);
    res.json({ status: "resource updated successfully!", data: post });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await services.deletePost(postId);
    res
      .status(200)
      .json({ status: "resource deleted successfully!", data: post });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const deletePostsUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletePosts = await services.deletePostsUser(userId)
    res
      .status(200)
      .json({ status: "resource deleted successfully!", data: post });
  } catch (error) {}
};

const hidenPostUsers = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await services.hidenPostUsers(postId);
    res
      .status(200)
      .json({ status: "resource updated successfully!", data: post });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const publishDraft = async (req, res) => {
  try {
    const { postId } = req.params;
    const draft = await services.publishDraft(postId);
    res
      .status(200)
      .json({ status: "resource updated successfully!", data: pdraftost });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

module.exports = {
  publishDraft,
  hidenPostUsers,
  deletePost,
  getPosts,
  getOnePost,
  getPostsFromOneUser,
  createNewPost,
  createNewDraft,
  updatePost,
  deletePostsUser,
};
