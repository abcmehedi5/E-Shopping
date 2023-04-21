import React from "react";
import { FaCartPlus, FaStar, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductDetails = ({ product, handleAddToCart }) => {
  const {
    _id,
    category,
    img,
    name,
    price,
    quantitiy,
    ratings,
    seller,
    shipping,
    stock,
  } = product;
  return (
    <div className="col-md-3 mb-3">
      <div className="card product-card">
        <div className="card-body text-center">
          <img className="img img-fluid" src={img} alt="icon" />
          <Link to={`/product/`+_id}>
            <h6 className="card-title fw-bold  mt-3">
              <small>{name}</small>
            </h6>
          </Link>
          <div className="d-flex justify-content-between card-Footer mt-3">
            <p className="card-text fw-bold text-secondary">
              <FaDollarSign /> {price}
            </p>
            <p className="rating">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> ({ratings})
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn-cart btn btn-danger"
          >
            <FaCartPlus className="mx-2" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
