import React, { useState } from "react";

const Products = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
                {x + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
