export default function SearchBar({ query, onQueryChange, status, onStatusChange }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search by title or description"
        className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Status Dropdown */}
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
  );
}
