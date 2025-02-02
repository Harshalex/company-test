import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";

function Home() {
  const LOCAL_KEY = "Products";

  const getAllProducts = () => {
    const list = localStorage.getItem(LOCAL_KEY);

    if (list) {
      return JSON.parse(localStorage.getItem(LOCAL_KEY));
    } else {
      return [];
    }
  };

  const [allProducts, setAllProducts] = useState(getAllProducts());
  const [showAdd, setShowAdd] = useState(false);
  const checkProduct = allProducts.length;

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(allProducts));
  }, [allProducts]);

  function handelAddButton() {
    toggle();
  }
  function toggle() {
    setShowAdd(!showAdd);
  }

  function handelAdd(newProduct) {
    const isDuplicate = allProducts.some(
      (product) =>
        product.productName === newProduct.productName &&
        product.price === newProduct.price
    );
    if (isDuplicate) {
      alert("Duplicate detected, not adding product");
    } else {
      setAllProducts((allProducts) => {
        return [...allProducts, newProduct];
      });
    }
  }

  function handelRemove(id) {
    setAllProducts(allProducts.filter((product) => product.id != id));
  }
  return (
    <div>
      {showAdd ? (
        <AddProduct
          allProducts={allProducts}
          onAdd={handelAdd}
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          toggle={toggle}
        />
      ) : (
        <div>
          <Navbar />
          <div className="w-3/4  mx-auto flex flex-col items-center">
            <div className=" w-full mx-auto py-6 flex justify-center ">
              <div className="w-11/12">
                <SearchBar
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                />
              </div>
              <div className="w-1/4 flex justify-end">
                <button
                  onClick={() => handelAddButton()}
                  className=" text-white bg-blue-500 font-semibold px-5  py-2 rounded-xl"
                >
                  {" "}
                  Add Product
                </button>
              </div>
            </div>
            <div className="w-full bg-slate-300">
              {checkProduct > 0 ? (
                <ProductList products={allProducts} onRemove={handelRemove} />
              ) : (
                <h1 className="text-center font-semibold text-2xl py-5">
                  No item found in the list
                </h1>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
