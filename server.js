import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post("/explain", async (req, res) => {
  try {
    const { question, correctAnswer, selectedAnswer, isTimeUp } = req.body;

    const prompt = isTimeUp
      ? `Explain why "${correctAnswer}" is correct for the question "${question}" in 2 simple sentences.`
      : selectedAnswer === correctAnswer
      ? `Explain why "${correctAnswer}" is correct for the question "${question}" in 2 simple sentences.`
      : `Explain why "${correctAnswer}" is correct and "${selectedAnswer}" is wrong for the question "${question}" in 2 simple sentences.`;

    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-8b-instruct",
        messages: [
          { role: "system", content: "You are a helpful programming tutor. Keep answers short and simple." },
          { role: "user", content: prompt }
        ],
        max_tokens: 150
      })
    });

    const data = await response.json();
    console.log("NVIDIA response:", JSON.stringify(data));
    const text = data.choices?.[0]?.message?.content;
    res.json({ explanation: text || "⚠️ No explanation received." });

  } catch (err) {
    console.error("Error:", err);
    res.json({ explanation: "⚠️ Failed to get explanation." });
  }
});

app.post("/feedback", async (req, res) => {
  try {
    const { username, levelName, score, total, wrongAnswers } = req.body;

    const prompt = `A student named ${username} completed the "${levelName}" level coding quiz. They scored ${score} out of ${total}. ${wrongAnswers.length > 0 ? `They struggled with: ${wrongAnswers.slice(0, 3).join(', ')}.` : 'They got everything correct!'} Write a friendly 3-sentence personalized feedback message encouraging them and giving one specific tip.`;

    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-8b-instruct",
        messages: [
          { role: "system", content: "You are a helpful programming tutor. Keep answers short and friendly." },
          { role: "user", content: prompt }
        ],
        max_tokens: 200
      })
    });

    const data = await response.json();
    console.log("NVIDIA feedback response:", JSON.stringify(data));
    const text = data.choices?.[0]?.message?.content;
    res.json({ feedback: text || "⚠️ No feedback received." });

  } catch (err) {
    console.error("Error:", err);
    res.json({ feedback: "⚠️ Failed to get feedback." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});