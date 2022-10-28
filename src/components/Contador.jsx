import { useReducer } from "react";

const initialState = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "DECREMENT":
      return { contador: state.contador + 1 };

    case "INCREMENT":
      return { contador: state.contador - 1 };

    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function mas() {
    dispatch({ type: "INCREMENT" });
  }

  function menos() {
    dispatch({ type: "DECREMENT" });
  }
  return (
    <div>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={menos}>-</button>
        <button onClick={mas}>+</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
