import React, { useState, useCallback } from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEdit] = useState(todo.text);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: editText } });
    setIsEditing(false);
  }, [dispatch, editText, todo.id]);

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={e => setEdit(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
        Remove
      </button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default TodoItem;