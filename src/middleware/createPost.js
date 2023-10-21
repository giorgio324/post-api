const validatePost = (req, res, next) => {
  const errors = [];
  for (const prop in req.body) {
    if (!req.body[prop]) {
      return res.send({ message: "All fields are required" });
    }
  }
  console.log(req.body.description);
  if (req.body.description?.length < 5) {
    errors.push("discription length less than 5");
  }
  if (errors.length) return res.status(422).send({ message: errors });
  return next();
};

module.exports = validatePost;
