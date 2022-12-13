import useContador from "../hooks/useContador";
const Contador = () => {
  const [state, mas, mas5, menos, menos5, reset] = useContador();
  console.log("Contador");

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
