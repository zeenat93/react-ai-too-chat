Markdown
# 🚀 AI Search & Chat Assistant

A modern, highly responsive AI-powered search and chat web application built with **React.js** and **Tailwind CSS**, integrated directly with the **Google Gemini AI API**. This application features dynamic theme switching, local storage management, rich markdown rendering, and syntax highlighting.

---

## ✨ Features

- **AI-Powered Responses:** Fetches real-time answers and structured text via Google Gemini AI REST API.
- **Rich Markdown & Syntax Highlighting:** Automatically formats AI responses with clean markdown (`react-markdown`) and syntax-highlighted code blocks (`react-syntax-highlighter`).
- **Persistent Search History:** Saves recent searches to browser `localStorage`, complete with duplicate removal logic and a strict item limit.
- **Interactive History Management:** Users can instantly re-run previous queries with a single click or delete individual/all history items.
- **Dynamic Dark/Light Mode:** Responsive theme switcher with preferences saved persistently in local storage.
- **Modern UI/UX:** Styled completely with utility-first Tailwind CSS, featuring custom loaders and smooth scrolling.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **AI Engine:** Google Gemini AI API (`v1beta`)
- **Key Libraries:**
  - `react-markdown`
  - `react-syntax-highlighter`

---

## ⚙️ Installation & Local Setup

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/zeenat93/react-ai-too-chat.git](https://github.com/zeenat93/react-ai-too-chat.git)
2:Navigate to the project directory:

Bash
cd react_ai_tool
Install dependencies:

3:Bash
npm install
Configure API Key:

4:Note: Currently, a .env file is not being used in this setup. You can insert your Google Gemini API key directly into your project's configuration file (such as constants.js) where the API key variable is defined before running the app.

Run the development server:

Bash
npm run dev
💡 What I Learned
Building this project helped me strengthen my core React and frontend development skills, including:

Managing complex state flows (useState, useEffect, useRef).

Handling asynchronous JavaScript operations and REST API error management.

Utilizing browser localStorage combined with JSON.parse and JSON.stringify for data persistence.

Implementing advanced JavaScript array and string manipulation techniques (map, filter, Set, slice, charAt).

