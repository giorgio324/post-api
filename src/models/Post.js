const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, minlength: 1, required: true },
    description: { type: String, required: true, minlength: 5 },
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post, PostSchema };
