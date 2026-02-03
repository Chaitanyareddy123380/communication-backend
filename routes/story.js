const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

const stories = [
  {
    title: "The Honest Woodcutter",
    text: "A poor woodcutter once dropped his axe into a river. He was very sad. A fairy appeared and rewarded his honesty."
  },
  {
    title: "The Thirsty Crow",
    text: "A thirsty crow found a pot with little water. He dropped stones into it until the water rose and he drank."
  },
  {
    title: "The Lion and the Mouse",
    text: "A lion spared a mouse. Later, the mouse helped the lion escape from a trap."
  }
];

router.get("/", auth, (req, res) => {
  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  res.json(randomStory);
});

module.exports = router;
