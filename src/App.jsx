import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Task Manager</h1>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>

        {/* ✅ This is required to show any toast */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </BrowserRouter>
  );
}
