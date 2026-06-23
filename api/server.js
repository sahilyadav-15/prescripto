import express from "express";
import cors from "cors";
import "dotenv/config";

// app config
const app = express();
const port = process.env.PORT || 3577;

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log("Server running on", port);
});
