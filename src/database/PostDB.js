const { postModel } = require("../models/modelos.js");

const getPosts = async () => {
  const posts = await postModel.find();
  return posts;
};

const getOnePost = async (id) => {
  const post = await postModel.findById(id);
  return post;
};

const getPostsFromOneUser = async (userID) => {
  const userPosts = await postModel.find().where({ userId: userID });
  return userPosts;
};

const createNewPost = async (title, content, category, userId) => {
  const post = new postModel({
    title,
    content,
    category,
    published: true,
    userId,
  });
  await post.save();
  return post;
};

const createNewDraft = async (title, content, category, userId) => {
  const draft = new postModel({
    title,
    content,
    category,
    published: false,
    userId,
  });
  await draft.save();
  return draft;
};

const updatePost = async (title, content, category, postId) => {
  const post = await postModel.updateOne(
    { _id: postId },
    {
      $set: { title, content, category },
    }
  );
  return post;
};

const deletePost = async (postId) => {
  const post = await postModel.deleteOne({ _id: postId });
  return post;
};

const hidenPostUsers = async (postId) => {
  const posts = await postModel.updateMany(
    { userId: postId },
    { published: false }
  );
  return posts;
};

const publishDraft = async (postId) => {
  const draft = await postModel.updateMany(
    { userId: postId },
    { published: true }
  );
  return draft;
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
};
