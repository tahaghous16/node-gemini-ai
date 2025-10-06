import express from "express";
import "dotenv/config";
import { aiController } from "./controller/ai.controller.js";
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is Working");
});

// Routes
app.use("/api", aiController);

app.listen(PORT, () => {
  console.log(`Server is running at Port : ${PORT}`);
});

export default app;
