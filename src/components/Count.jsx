import { useReducer } from "react";

const initialState = { contador: 0 };
const init = (initialState) => {
  return {
    contador: initialState.contador + 2,
  };
};
const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.DECREMENT:
      return { contador: state.contador + action.payload };
    case TYPES.INCREMENT:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}
const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  function mas() {
    dispatch({ type: TYPES.DECREMENT, payload: 1 });
  }
  function menos() {
    dispatch({ type: TYPES.INCREMENT, payload: 1 });
  }
  function rest() {
    dispatch({ type: TYPES.RESET });
  }
  return (
    <div>
      <h2>{state.contador}</h2>
      <button onClick={mas}>+</button>
      <button onClick={menos}>-</button>
      <button onClick={rest}>reset</button>
    </div>
  );
};

export default Count;
