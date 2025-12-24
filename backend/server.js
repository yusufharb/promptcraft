import express from "express";
import cors from "cors";
import { improveIdea } from "./improveIdea.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/improve", (req, res) => {
  const { idea } = req.body;
  if (!idea) return res.status(400).json({ error: "Idea is required" });

  const improvedPrompt = improveIdea(idea);
  res.json({ improvedPrompt });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
