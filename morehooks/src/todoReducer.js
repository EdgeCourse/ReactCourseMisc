const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CHECK_ALL':
      return state.map(todo => ({ ...todo, completed: true }));
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;