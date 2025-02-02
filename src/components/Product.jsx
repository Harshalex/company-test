import React from "react";

function Product({ product, onRemove }) {
  return (
    <div className="my-1 p-4">
      <div className="w-full flex justify-between gap-4 p-5 rounded-xl  bg-slate-400 border-2 border-slate-600">
        <div className="w-1/4">
          <h1 className="w-fit">{product.productName}</h1>
        </div>
        <div className="w-1/4">
          <h2 className="w-fit text-center">${product.price}</h2>
        </div>
        <button
          onClick={() => onRemove(product.id)}
          className="px-5 py-1 bg-red-600 text-white rounded-lg font-semibold"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Product;
