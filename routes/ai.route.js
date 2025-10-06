import express from "express";

import { aiController } from "../controller/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post("/generate-content", aiController);

export default aiRouter;
