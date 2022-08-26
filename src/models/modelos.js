const mongoose = require("mongoose");
const { userSchema, postSchema } = require("../schema/Schemas.js");

const userModel = mongoose.model("user", userSchema);

const postModel = mongoose.model("post", postSchema);

module.exports = {
  userModel,
  postModel,
};
