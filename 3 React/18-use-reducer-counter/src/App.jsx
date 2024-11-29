import { useState } from "react";
import { useReducer } from "react";

const counterReducer = (currentState, action) => {
  console.log('In Reducer',currentState,action);
  let newState = currentState;

  if (action.type === "INCREMENT") {
    newState += 1;
  } else if (action.type === "DECREMENT") {
    newState -= 1;
  }
  return newState;
};

function App() {

  // const [counterVal ,setCounterVal] = useState(0);
  const initialState =0;
  const [counterVal, counterDispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    //  setCounterVal(current => current + 1);
    counterDispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    // setCounterVal(current => current - 1);
    counterDispatch({
      type: "DECREMENT",
    });
  };

  return (
    <>
      <h1>count : {counterVal}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
