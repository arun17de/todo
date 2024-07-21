import React from 'react';

function TodoItem({ todo, index, onToggleComplete, onDelete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => onToggleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;