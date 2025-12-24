# PromptCraft – Turn Rough Ideas into Clear Website Prompts

PromptCraft is a small full-stack product experiment that helps users turn a rough website idea into a clearer, more structured prompt they can use to build a website.

The goal is not to generate a full website, but to clarify thinking — audience, goal, pages, and style — in a way that feels fast, simple, and useful.

---

## ✨ What This Does

**Flow:**
1. User writes a rough website idea  
2. User submits it  
3. The system returns an improved, structured version of the idea  

**“Improved” means:**
- Clearer purpose
- Defined target audience
- Suggested pages or sections
- Basic design direction

---

## 🧠 Product Thinking

I intentionally kept the experience:
- Simple (single input → single output)
- Fast (minimal friction)
- Deterministic (easy to test, no credentials required)

The refinement logic is handled on the backend and can later be replaced with an AI model (e.g. GPT) without changing the frontend or user flow.

---

## 🛠 Tech Stack

**Frontend**
- React
- Vite
- Fetch API

**Backend**
- Node.js
- Express

Chosen to keep the project lightweight, easy to run locally, and suitable for a time-boxed product task.

---
## 🔮 Future Improvements


AI-based refinement (GPT)

Tone and style options

Prompt history

Improved UI and animations

👤 Author

Yusuf Hamdy Harb



## 📂 Project Structure

promptcraft/
├── frontend/
│ └── src/
│ └── App.jsx
└── backend/
└── server.js

---

## 🚀 How to Run Locally

### Backend & Frontend

```bash
cd backend
npm install
npm start
Output: http://localhost:5000

Then open new terminal
1- cd frontend
2- npm install
3- npm run dev
output: http://localhost:5173
