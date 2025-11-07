import React from "react";

const Products = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <div>
        <select>
          <option value="">1</option>
        </select>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
