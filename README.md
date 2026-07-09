# 🤖 AI-First CRM – HCP Interaction Logger

An AI-powered Customer Relationship Management (CRM) system designed for Healthcare Professional (HCP) interactions.

The application allows Medical Representatives to log HCP interactions either by chatting naturally with an AI Assistant or by reviewing an automatically populated interaction form.

The AI Agent is built using **LangGraph** and **Groq LLM**, while the frontend uses **React + Redux** and the backend uses **FastAPI** with **MySQL** for persistent storage.

---

# 🚀 Features

- AI Chat based Interaction Logging
- Automatic Form Filling using AI
- Review & Edit Extracted Information
- Save Interactions into MySQL Database
- LangGraph AI Agent
- FastAPI Backend
- React + Redux Frontend
- MySQL Database Integration
- Groq LLM Integration
- Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React
- Redux Toolkit
- Material UI
- Axios

## Backend

- Python
- FastAPI
- SQLAlchemy
- LangGraph
- LangChain
- Groq API
- MySQL

---

# 🧠 AI Agent Workflow

```
User Chat
      │
      ▼
 LangGraph Agent
      │
      ▼
Groq LLM
      │
      ▼
Entity Extraction
      │
      ▼
Interaction Form
      │
      ▼
Review & Edit
      │
      ▼
Save Interaction
      │
      ▼
MySQL Database
```

---

# 🧰 LangGraph Tools

The AI Agent contains the following tools.

## 1. Log Interaction

Extracts important details from user conversations and fills the interaction form automatically.

---

## 2. Edit Interaction

Allows users to edit AI extracted information before saving.

---

## 3. Save Interaction

Stores interaction details into MySQL database.

---

## 4. Retrieve Interaction

Retrieves previously saved interaction records.

---

## 5. Interaction Summary

Generates a concise summary of HCP interactions using the LLM.

---

# 📂 Project Structure

```
AI_CRM
│
├── frontend
│   ├── components
│   ├── pages
│   ├── redux
│   ├── services
│   └── App.jsx
│
├── backend
│   ├── api
│   ├── database
│   ├── langgraph
│   ├── models
│   ├── schemas
│   ├── services
│   ├── tools
│   └── main.py
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI_CRM.git

cd AI_CRM
```

---

# Backend Setup

```bash
cd backend

python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Install Packages

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file inside backend.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

DB_USER=root
DB_PASSWORD=YOUR_PASSWORD
DB_HOST=localhost
DB_PORT=3306
DB_NAME=ai_crm
```

---

## Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Run

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🗄 Database

Database used

- MySQL

Main Table

```
interactions
```

Fields

- id
- hcp_name
- interaction_type
- date
- time
- attendees
- topics
- materials
- samples
- follow_up
- notes

---

# 📸 Screenshots

## Home Screen

> Replace the image below with your screenshot.

![Home Screen]
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/33168c86-99ad-4b21-81da-e450eadf297b" />


---

## AI Chat

> Replace with your AI Chat screenshot.

![AI Chat]
<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/1b6afc1d-3442-4a91-b61d-5c4e1253482b" />


---

## Auto Filled Form

> Replace with form screenshot.

![Auto Filled Form]
<img width="1112" height="949" alt="image" src="https://github.com/user-attachments/assets/344f71b4-d02e-4f2d-bacb-43021237fdc9" />

---

## Review & Save

> Replace with save screen screenshot.

![Review]
<img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/a6b4d2e2-e7fb-4517-a746-9a15c456d3cd" />
<img width="1919" height="946" alt="image" src="https://github.com/user-attachments/assets/bbce9627-7254-4cc2-b8cf-39552a5d77a1" />


---

## MySQL Database

> Replace with MySQL Workbench screenshot.

![Database]
<img width="977" height="166" alt="image" src="https://github.com/user-attachments/assets/9052a601-d791-4864-bb78-cb0ae7fd3a7b" />


---

# 🎥 Demo Workflow

1. User enters interaction in AI Chat.

2. LangGraph sends prompt to Groq LLM.

3. AI extracts entities.

4. Form is automatically populated.

5. User reviews the form.

6. User edits fields if required.

7. User clicks Review & Save.

8. Backend stores data into MySQL.

---

# 📌 API Endpoints

## Chat

```
POST /chat/
```

---

## Save Interaction

```
POST /interaction/
```

---

# 👩‍💻 Author

**Saranya Upputuri**


AI-First CRM – HCP Interaction Logger

---

# 📜 License

This project was developed for technical assessment and educational purposes.
