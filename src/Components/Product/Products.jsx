import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import "./Product.css";
import { addToDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [show, setShow] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 8));
        setAllProducts(data);
        setVisibleProducts(data.slice(0, 8));
      });
  }, []);

  const handleAddToCart = (product) => {
    addToDb(product._id);
  };

  // handle see more data
  const handleSeemore = () => {
    setProducts(allProducts);
    const nextProducts = allProducts.slice(0, products.length + 8);
    setProducts(nextProducts);

    if (nextProducts.length === allProducts.length) {
      setShow(false);
    }
  };

  // search functiona
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredProducts = allProducts.filter((product) => {
      const name = product.name?.toLowerCase();
      const category = product.category?.toLowerCase();
      return name?.includes(query) || category?.includes(query);
    });
    setProducts(filteredProducts.slice(0, 8));
    setVisibleProducts(filteredProducts.slice(0, 8));
    setShow(filteredProducts.length > 8);
  };

  return (
    <div className="container">
      <h3 className="fw-bold text-center">Our Products</h3>
      <input
        className=" form-control mt-5 mb-3 search"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="What are you looking for..."
      />
      <div className="row ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductDetails
              handleAddToCart={handleAddToCart}
              product={product}
              key={product._id}
            ></ProductDetails>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      {}
      {show && (
        <Link>
          <h5 onClick={() => handleSeemore()} className="text-center ">
            see more
          </h5>
        </Link>
      )}
    </div>
  );
};

export default Products;
