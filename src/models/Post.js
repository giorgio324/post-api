const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, minlength: 1, required: true },
    description: { type: String, required: true, minlength: 5 },
    category: {
      name: { type: String, required: true },
      status: { type: Boolean, default: false },
    },
    timestamp: { type: Number, default: () => Math.floor(Date.now() / 1000) },
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post, PostSchema };
