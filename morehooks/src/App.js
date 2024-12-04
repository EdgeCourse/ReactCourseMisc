import React, { useReducer, useRef, useEffect, useCallback, useState } from 'react';
import TodoContext from './TodoContext';
import todoReducer from './todoReducer';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  const handleAddTodo = useCallback(() => {
    if (inputRef.current.value) {
      dispatch({ type: 'ADD_TODO', payload: inputRef.current.value });
      inputRef.current.value = '';
    }
  }, [dispatch]);

  const handleCheckAll = useCallback(() => {
    dispatch({ type: 'CHECK_ALL' });
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(state));
    } catch (error) {
      console.error('Error persisting todos to local storage:', error);
    }
  }, [state]);

  const filteredTodos = state.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Todo List</h1>
        <input ref={inputRef} type="text" placeholder="Add a new task" />
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleCheckAll}>Check All as Done</button>
        <input type="text" placeholder="Search todos" onChange={handleSearch} />
        <TodoList filteredTodos={filteredTodos} />
      </div>
    </TodoContext.Provider>
  );
};

export default App;