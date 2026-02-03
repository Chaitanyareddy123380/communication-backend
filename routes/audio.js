const express = require("express");
const multer = require("multer");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".webm");
  }
});

const upload = multer({ storage });

// Upload audio route
router.post("/upload", auth, upload.single("audio"), (req, res) => {
  res.json({
    message: "Audio uploaded successfully",
    file: req.file.filename
  });
});

module.exports = router;
const fs = require("fs");
const path = require("path");

// List all audio files (Teacher view)
router.get("/list", auth, (req, res) => {
  const uploadDir = path.join(__dirname, "../uploads");

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Error reading files" });
    }

    const audioFiles = files.filter(file => file.endsWith(".webm"));
    res.json(audioFiles);
  });
});
