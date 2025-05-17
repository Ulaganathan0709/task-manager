import TaskForm from '../components/TaskForm';
import { getTasks, saveTasks } from '../utils/localStorage';
import { v4 as uuidv4 } from 'uuid';

export default function CreateTask() {
  const handleCreate = (newTask) => {
    const allTasks = getTasks();
    const taskWithId = { ...newTask, id: uuidv4() };
    const updatedTasks = [...allTasks, taskWithId];
    saveTasks(updatedTasks);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}
