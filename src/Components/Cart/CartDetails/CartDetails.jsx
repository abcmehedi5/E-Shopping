import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const CartDetails = ({ product, handleClearCart }) => {
  const {
    _id,
    category,
    img,
    name,
    price,
    quantity,
    ratings,
    seller,
    shipping,
    stock,
  } = product;
  return (
    <div className="card cart-card-container mb-2">
      <div className="card-body border rounded  d-flex justify-content-between align-items-center">
        <div className="d-md-flex align-items-center gap-5 justify-content-center">
          <img className=" img-fluid" src={img} alt="icon" />
          <div>
            <Link to={`/product/` + _id}>
              <h5 className="card-title fw-bold">{name}</h5>
            </Link>
            <p className="card-text text-secondary fw-bold">Price: ${price}</p>
            <p className="card-text text-secondary">
              Shipping Charge : {shipping}
            </p>
            <p className="card-text text-secondary"> Quantity : {quantity}</p>
          </div>
        </div>

        <p onClick={() => handleClearCart(_id)} className="cart-delete">
          <RiDeleteBin5Line />
        </p>
      </div>
    </div>
  );
};

export default CartDetails;
