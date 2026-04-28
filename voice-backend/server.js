require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "No message provided"
      });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    console.log(JSON.stringify(completion, null, 2));

    const aiReply =
      completion?.choices?.[0]?.message?.content ||
      "No response from AI";

    res.json({
      reply: aiReply,
    });

  } catch (error) {

    console.error("ERROR:", error);

    res.status(500).json({
      reply: "Backend error occurred",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});