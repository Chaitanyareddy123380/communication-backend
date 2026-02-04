
const storyRoutes = require("./routes/story");
const audioRoutes = require("./routes/audio");
const sentenceRoutes = require("./routes/sentence");
const dashboardRoutes = require("./routes/dashboard");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use("/uploads", express.static("uploads"));
app.use(cors({
  origin: "https://cool-bonbon-0b8bee.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/sentence", sentenceRoutes);
app.use("/api/audio", audioRoutes);
app.use("/api/story", storyRoutes);


// Routes
app.use("/api/auth", authRoutes);

// MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://chaitanyareddy:DeviReddy%402005@chaitanyareddy.sscxvgf.mongodb.net/?appName=chaitanyareddy"
)
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch((err) =>
  console.log("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("✅ Communication Round Backend is Running");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🚀 Server started on port " + PORT);
});

