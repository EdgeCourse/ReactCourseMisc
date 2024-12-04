import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = ({ filteredTodos }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;