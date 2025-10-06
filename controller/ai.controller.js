import main from "../utils/gemini.js";

export const aiController = async (req, res) => {
  try {
    const prompt = req.body.question;
    const result = await main(prompt);
    res.json({ result: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


