import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import { getTasks, saveTasks } from '../utils/localStorage';

export default function EditTask() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const allTasks = getTasks();
    const found = allTasks.find((t) => t.id === id);
    if (found) {
      setTask(found);
    } else {
      alert('Task not found');
    }
  }, [id]);

  const handleUpdate = (updatedTask) => {
    const allTasks = getTasks();
    const newTasks = allTasks.map((t) =>
      t.id === id ? { ...updatedTask, id } : t
    );
    saveTasks(newTasks);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
      {task ? <TaskForm onSubmit={handleUpdate} initialData={task} /> : <p>Loading...</p>}
    </div>
  );
}
