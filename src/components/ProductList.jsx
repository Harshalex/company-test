import React from "react";
import Product from "./Product";

function ProductList({ products, onRemove }) {
  return (
    <div>
      {products.map((product) => (
        <Product product={product} onRemove={onRemove} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
