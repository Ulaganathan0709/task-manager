import { Link } from 'react-router-dom';

export default function TaskTable({ tasks, onDelete, onSort, sortKey, sortOrder }) {
  const handleSort = (key) => {
    onSort(key, sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getArrow = (key) => {
    if (key !== sortKey) return '';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  const renderStatusBadge = (status) => {
    const base = 'px-2 py-1 rounded text-xs font-semibold';
    switch (status.toLowerCase()) {
      case 'pending':
        return <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>;
      case 'done':
        return <span className={`${base} bg-green-100 text-green-800`}>Done</span>;
      case 'overdue':
        return <span className={`${base} bg-red-100 text-red-800`}>Overdue</span>;
      default:
        return <span className={`${base} bg-gray-200 text-gray-800`}>{status}</span>;
    }
  };

  const isOverdue = (task) => {
    if (!task.dueDate || task.status === 'done') return false;
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate < today && task.status !== 'done';
  };

  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks found.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-md mt-4">
      <table className="min-w-full text-sm text-center bg-white border">
        <thead className="bg-gray-100 text-gray-800 font-semibold">
          <tr>
            <th onClick={() => handleSort('title')} className="px-4 py-3 cursor-pointer">
              Title {getArrow('title')}
            </th>
            <th className="px-4 py-3">Description</th>
            <th onClick={() => handleSort('dueDate')} className="px-4 py-3 cursor-pointer">
              Due Date {getArrow('dueDate')}
            </th>
            <th onClick={() => handleSort('status')} className="px-4 py-3 cursor-pointer">
              Status {getArrow('status')}
            </th>
            <th className="px-4 py-3">Edit</th>
            <th className="px-4 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const displayStatus = isOverdue(task)
              ? 'overdue'
              : task.status === 'in progress'
              ? 'pending'
              : task.status;

            return (
              <tr key={task.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.description}</td>
                <td className="px-4 py-2">{task.dueDate || '—'}</td>
                <td className="px-4 py-2">{renderStatusBadge(displayStatus)}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/edit/${task.id}`}
                    className="inline-block px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onDelete(task.id)}
                    className="inline-block px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
