import React from 'react';
import axios from 'axios';

const TaskList = ({ task, fetchtask, setEdittask }) => {
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await axios.delete('http://localhost:5000/task/delete', {
        data: {id },
      });
      fetchtask();
      alert('Task deleted successfully');
    } catch (err) {
      console.error('Error deleting task:', err);
      alert('Error deleting task: ' + err.message);
    }
  };

  return (
    <div>
      <h1>Task List</h1>

      {task.length === 0 ? (
        <p>No task found</p>
      ) : (
        <ul>
          {task.map((t) => (
            <li key={t._id} style={{ marginBottom: '1rem' }}>
              <strong>{t.title}</strong> - {t.description}
              <br />
              <button onClick={() => setEdittask(t)} style={{ marginRight: '1rem' }}>
                Edit
              </button>
              <button onClick={() => handleDelete(t._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
