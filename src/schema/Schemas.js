const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    role: { type: Boolean, default: false },
    visibility: { type: Boolean, default: true },
  },
  { versionKey: false }
);

const postSchema = mongoose.Schema(
  {
    title: String,
    content: { type: String, required: true },
    category: { type: String, required: true },
    published: Boolean,
    userId: String,
  },
  { versionKey: false }
);

module.exports = {
  userSchema,
  postSchema,
};
