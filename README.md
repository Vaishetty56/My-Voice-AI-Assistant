# Voice AI Assistant

A browser-based AI Voice Assistant built using Groq, Express.js, and the Web Speech API.

This project allows users to interact with an AI using both voice and text. The assistant listens to user speech, converts it into text, sends it to a Groq-powered language model, and speaks the AI response back to the user in real time.

---

## Features

* Voice input using Speech Recognition
* AI-generated responses using Groq LLMs
* Voice output using Text-to-Speech
* Real-time conversational interaction
* Simple and responsive UI
* Express.js backend API

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Web Speech API

### Backend

* Node.js
* Express.js
* Groq SDK
* dotenv
* cors

---

## Project Structure

```text
voice-ai-assistant/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── frontend/
│   └── index.html
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-link>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install required packages

```bash
npm install express cors dotenv groq-sdk
```

---

## Environment Variables

Create a `.env` file in the root folder and add:

```env
GROQ_API_KEY=your_api_key_here
```

---

## Running the Project

### Start Backend

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

### Start Frontend

Open `index.html` using Live Server.

---

## AI Model Used

```text
llama-3.3-70b-versatile
```

---

## How It Works

```text
User Voice
→ Speech Recognition
→ Express Backend
→ Groq API
→ AI Response
→ Speech Synthesis
→ Spoken Output
```

---

## Future Improvements

* Conversation memory
* Continuous listening mode
* Wake word detection
* Improved UI/animations
* Deployment support
* Mobile responsiveness

---

## Author

Vaish Shetty
