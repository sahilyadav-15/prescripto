import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import adminRoute from "./src/routes/admin.route.js";

// app config
const app = express();
const port = process.env.PORT || 3577;
connectDb();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
