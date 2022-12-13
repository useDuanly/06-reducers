import style from "./index.module.css";
function Index({ product, addToCart }) {
  const { id, name, price } = product;
  return (
    <div className={style.product}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
}

export default Index;
