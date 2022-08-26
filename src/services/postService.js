const DB = require("../database/PostDB.js");

const getPosts = () => {
  const posts = DB.getPosts();
  return posts;
};

const getOnePost = (id) => {
  const userPost = DB.getOnePost(id);
  return userPost;
};

const getPostsFromOneUser = (userID) => {
  const userPost = DB.getPostsFromOneUser(userID);
  return userPost;
};

const createNewPost = (title, content, category, userId) => {
  const post = DB.createNewPost(title, content, category, userId);
  return post;
};

const createNewDraft = (title, content, category, userId) => {
  const draft = DB.createNewDraft(title, content, category, userId);
  return draft;
};

const updatePost = (title, content, category, postId) => {
  const post = DB.updatePost(title, content, category, postId);
  return post;
};

const deletePost = (postId) => {
  const post = DB.deletePost(postId);
  return post;
};

const deletePostsUser = (userId) => {
  const deletePost = DB.deletePostsUser(userId);
  return deletePost;
};

const hidenPostUsers = (postId) => {
  const post = DB.hidenPostUsers(postId);
  return post;
};

const publishDraft = (postId) => {
  const post = DB.publishDraft(postId);
  return post;
};

module.exports = {
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
};
