const router = require("express").Router();
const CreatePostControler = require("../controllers/CreatePost");
const createPostMiddleware = require("../middleware/createPost");

router.post("/", [createPostMiddleware], CreatePostControler.createPost);
module.exports = router;
