const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json({
    message: "Welcome to Student Dashboard",
    userId: req.user.userId
  });
});

module.exports = router;
