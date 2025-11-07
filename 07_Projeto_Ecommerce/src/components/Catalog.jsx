import { useState, useEffect } from "react";
import productsDate from "../data/products_mock.json";
import Products from "./pages/Products";

const Catalog = () => {
    return (
        <section>
            <h1>Product's Catalog</h1>
            <div className="products-container">
                {productsDate.map((product) => (
                    <Products key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
};
export default Catalog;
