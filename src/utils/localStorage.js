const TASKS_KEY = 'tasks';

// Get all tasks
export function getTasks() {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}

// Save tasks array
export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// Get one task by ID (optional helper)
export function getTaskById(id) {
  const tasks = getTasks();
  return tasks.find((task) => task.id === id);
}

// Clear all tasks (optional helper for testing)
export function clearTasks() {
  localStorage.removeItem(TASKS_KEY);
}
