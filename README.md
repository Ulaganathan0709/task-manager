# 📋 Task Manager

A clean and responsive task manager built with **React + Vite**, styled using **Tailwind CSS**, and powered by **localStorage**. Easily add, update, delete, search, filter, and manage tasks — including overdue tracking!

---

## 🔗 Live Demo

🌍 [View on Vercel](https://your-vercel-url.vercel.app)

---

## 📦 Features

✅ Create and edit tasks  
✅ Mark tasks as Pending or Done  
✅ Filter tasks by status: Pending, Done, Overdue  
✅ Search by title or description  
✅ Paginated task list (5 per page)  
✅ LocalStorage persistence  
✅ Toast notifications for success/error  
✅ Fully responsive design (mobile-friendly)

---

## 🛠 Tech Stack

- ⚛️ React (with Vite)
- 🎨 Tailwind CSS
- 🔄 React Router
- 🔔 React Toastify
- 💾 LocalStorage

---

## 📂 Project Structure

task-manager/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskTable.jsx
│   │
│   ├── hooks/
│   │   └── useForm.js 
│   │
│   ├── pages/
│   │   ├── CreateTask.jsx
│   │   ├── EditTask.jsx
│   │   └── Home.jsx
│   │
│   ├── utils/
│   │   └── localStorage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css           # or app.css
│   └── tailwind.config.js  # (generated in root, but belongs logically to project)
│
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── vite.config.js


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

## 2. Install dependencies

```bash
npm install
```
## 3. Run the app locally

```bash
npm run dev
```

## 4. Build for production

```bash
npm run build
```

## 📄 License

MIT License

Copyright (c) 2025 [Ulaganathan.A]

This project is open-sourced under the MIT License  
and intended for educational and learning purposes only.

