import { useReducer } from "react";

import { TYPES } from "../actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  ContadorReducer,
} from "../reducers/contadorReducer";

export function useContador() {
  const [state, dispatch] = useReducer(
    ContadorReducer,
    contadorInitialState,
    contadorInit
  );

  const mas = () => {
    dispatch({ type: TYPES.INCREMENT });
  };

  const mas5 = () => {
    dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  };

  const menos = () => {
    dispatch({ type: TYPES.DECREMENT });
  };

  const menos5 = () => {
    dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  };

  const reset = () => {
    dispatch({ type: TYPES.RESET });
  };

  return [state, mas, mas5, menos, menos5, reset];
}

export default useContador;
