import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function AddProduct({ showAdd, toggle, onAdd, setShowAdd, allProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceErr, setPriceErr] = useState(false);
  const navigate = useNavigate();

  function handelPrice(e) {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) {
      setPriceErr(true);
      setPrice("");
    } else {
      setPriceErr(false);
      setPrice(value);
    }
  }

  function handelSubmit(e) {
    e.preventDefault();

    if (name == "" || price == "") return;
    const uid = uuid();
    const newProduct = {
      id: uid,
      productName: name,
      price: Number(price),
    };

    onAdd(newProduct);
    handelToggle();
  }
  function handelToggle() {
    setShowAdd(false);
    navigate("/");
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center  ">
      <div className="w-2/5 border-2 border-slate-600 rounded-md p-10">
        <form onSubmit={handelSubmit}>
          <button
            onClick={handelToggle}
            className="px-5 py-1 bg-blue-400 rounded-lg text-white"
          >
            ⬅️ Back
          </button>
          <h1 className="mx-auto  my-7 text-4xl font-medium text-slate-700">
            Add Product
          </h1>
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="text-2xl font-semibold text-slate-600"
              >
                Product Name{" "}
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-4/5 px-4 py-1 my-3 bg-slate-200 border-2 border-slate-400 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="text-2xl font-semibold text-slate-600"
              >
                Product Price{" "}
              </label>
              <input
                id="price"
                value={price}
                onChange={(e) => handelPrice(e)}
                type="text"
                className="w-4/5 px-4 py-1 my-3 bg-slate-200 border-2 border-slate-400 rounded-md"
              />
              {priceErr ? (
                <span className="block text-red-500">
                  Please enter numbers only
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                onClick={handelSubmit}
                className="px-14 py-2 text-white bg-blue-600 rounded-lg text-xl"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
