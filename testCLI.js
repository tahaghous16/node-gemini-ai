import readline from "readline";
import main from "./utils/gemini.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write a prompt: ", async (prompt) => {
  try {
    const result = await main(prompt);
    console.log("\nGemini says:\n", result);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    rl.close();
  }
});
