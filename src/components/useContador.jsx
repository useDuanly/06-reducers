import { useReducer, useCallback } from "react";

const initialState = { contador: 0 };
const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };

    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };

    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };

    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };

    case TYPES.RESET:
      return initialState;

    default:
      return state;
  }
}

const Contador = () => {
  console.log("Contador");
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const mas = useCallback(() => {
    dispatch({ type: TYPES.INCREMENT });
  });

  const mas5 = useCallback(() => {
    dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  });

  const menos = useCallback(() => {
    dispatch({ type: TYPES.DECREMENT });
  });

  const menos5 = useCallback(() => {
    dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  });

  const reset = useCallback(() => {
    dispatch({ type: TYPES.RESET });
  });
  return (
    <section>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={mas5}>+5</button>
        <button onClick={menos}>-</button>
        <button onClick={reset}>0</button>

        <button onClick={mas}>+</button>
        <button onClick={menos5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </section>
  );
};

export default Contador;
