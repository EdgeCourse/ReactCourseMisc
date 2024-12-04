/*
//a simple state example:

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
*/


//a similar piece of code with useState
/*
issues with useState:
Scalability:
As the number of state variables and their interactions increase, managing them within a single state object can become more challenging.
It may lead to less readable and maintainable code, especially when dealing with deeply nested state structures.

Testing:
Testing components with complex state updates can be more difficult, as you need to mock the state and its updates.
While it's possible to test, it might require more effort compared to a useReducer approach.

Performance:
In certain scenarios, frequent updates to multiple state variables within a single setState call can potentially trigger unnecessary re-renders.
However, React's optimization techniques often mitigate this issue.

Readability:
For complex state updates involving multiple variables, the functional update syntax can become less readable, especially when dealing with nested state structures.
*/

/*
import { useState } from 'react';

function Counter() {
  const [state, setState] = useState({
    count: 0,
    isToggled: false,
  });

  const incrementAndToggle = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
      isToggled: !prevState.isToggled,
    }));
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Toggled: {state.isToggled ? 'true' : 'false'}</p>
      <button onClick={incrementAndToggle}>Increment and Toggle</button>
    </div>
  );
}

*/

/*
useReducer can deal with complex state updates and interactions. 

Centralized State Management:
Single Source of Truth: useReducer provides a centralized location for managing state, making it easier to understand and maintain.
Complex State Updates: It's well-suited for handling multiple interrelated state variables and complex state transitions.

Predictable State Updates:
Immutability: Encourages immutable state updates, preventing unintended side effects and making your code more reliable.
Clear Action-Based Approach: Defining specific action types makes state changes easier to reason about and test.

Performance Optimization:
Optimized Re-renders: useReducer can optimize re-renders by only updating necessary parts of the state.
Reduced Complexity: Centralized state management can simplify complex state logic.

Testability:
Isolated Logic: The reducer function can be tested independently, ensuring correct behavior for different actions.
Easier Debugging: Clear separation of concerns makes debugging state-related issues more straightforward.

Use useReducer:

Complex State: When your state involves multiple interdependent variables or requires complex logic to update.
Asynchronous Actions: When state changes are triggered by asynchronous operations like API calls or timers.
Shared State: When multiple components need to access and update the same state.
*/
import { useReducer } from 'react';

const initialState = {
  count: 0,
  isToggled: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'toggle':
      return { ...state, isToggled: !state.isToggled };
    case 'incrementAndToggle':
      return {
        ...state,
        count: state.count + 1,
        isToggled: !state.isToggled,
      };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Toggled: {state.isToggled ? 'true' : 'false'}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
      <button onClick={() => dispatch({ type: 'incrementAndToggle' })}>
        Increment and Toggle
      </button>
    </div>
  );
}

export default Counter;