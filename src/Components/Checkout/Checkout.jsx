import React from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import { Link, useLoaderData } from "react-router-dom";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const Checkout = () => {
  const cart = useLoaderData();
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  let grandTotal = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
    grandTotal = totalPrice + totalShipping;
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h4>Your detials</h4>

          <label className="form-label">Name</label>
          <input type="text" placeholder="your name" className="form-control" />

          <label className="form-label mt-3">Email Address</label>
          <input type="text" placeholder="your name" className="form-control" />

          <label className="form-label mt-3">Address</label>
          <input
            type="text"
            placeholder="your full address"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <OrderSummary
            grandTotal={grandTotal}
            totalShipping={totalShipping}
            quantity={quantity}
            totalPrice={totalPrice}
          ></OrderSummary>
          <div className="card-footer bg-transparent border-success">
            <button className="btn btn-danger w-100 mb-5">Order place</button>
          </div>
        </div>
      </div>

      <ProcessPayment></ProcessPayment>
    </div>
  );
};

export default Checkout;
