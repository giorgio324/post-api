const { Post } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
    });
    return res.status(201).send(post);
  } catch (_) {
    return res.send({ message: "Ooops... something went wrong" });
  }
};
