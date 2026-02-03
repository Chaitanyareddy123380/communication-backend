const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

const sentences = [
  "Practice makes a man perfect.",
  "Communication is the key to success.",
  "Confidence comes from preparation.",
  "Learning never stops in life."
];

router.get("/", auth, (req, res) => {
  const randomSentence =
    sentences[Math.floor(Math.random() * sentences.length)];

  res.json({ sentence: randomSentence });
});

module.exports = router;
