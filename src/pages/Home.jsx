import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskTable from '../components/TaskTable';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { getTasks, saveTasks } from '../utils/localStorage';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortKey, setSortKey] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    const stored = getTasks();
    setTasks(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    saveTasks(updated);
  };

  const handleSort = (key, order) => {
    setSortKey(key);
    setSortOrder(order);
  };

  const today = new Date().toISOString().split('T')[0];

  const filteredTasks = tasks
    .filter((task) => {
      const matchSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description?.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === 'overdue'
          ? task.dueDate && task.dueDate < today && task.status === 'pending'
          : statusFilter
          ? task.status === statusFilter
          : true;

      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      const valA = a[sortKey]?.toLowerCase?.() || '';
      const valB = b[sortKey]?.toLowerCase?.() || '';
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Your Tasks</h1>
        <Link
          to="/create"
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          + Add Task
        </Link>
      </div>

      <SearchBar
        query={search}
        onQueryChange={setSearch}
        status={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <TaskTable
        tasks={paginatedTasks}
        onDelete={handleDelete}
        onSort={handleSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
