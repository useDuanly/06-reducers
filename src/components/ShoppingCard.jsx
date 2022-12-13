import React from "react";
import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ProductItem from "../components/ProductItem/index";
function ShoppingCard() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, card } = state;

  function addToCart(id) {
    console.log(id);
  }
  function delFormCart() {}

  function delCart(id) {}

  return (
    <div>
      <h2>ShoppingCard</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box"></article>
    </div>
  );
}

export default ShoppingCard;
