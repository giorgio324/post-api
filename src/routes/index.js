const router = require("express").Router();
const categoryRouter = require("./CategoryRouter");
const userRouter = require("./UserRouter");
const createpost = require("./CreatePost");
router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/createpost", createpost);
module.exports = router;
