import React, { useEffect, useState } from "react";

function SearchBar({ allProducts, setAllProducts }) {
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState(allProducts);

  useEffect(() => {
    if (search == "") {
      setAllProducts(filterProducts);
    } else {
      const searchProducts = allProducts.filter((product) =>
        product.productName.toLowerCase().includes(search)
      );
      setAllProducts(searchProducts);
    }
  }, [search]);
  return (
    <div className="mx-auto">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search Product"
        className="w-4/6 py-2 px-5 bg-slate-200 border-2 border-slate-400 rounded-full "
      />
    </div>
  );
}

export default SearchBar;


