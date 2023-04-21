import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
  removeFromDb,
} from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails/CartDetails";
import "./Cart.css";
import OrderSummary from "../OrderSummary/OrderSummary";
const Cart = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);

      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, []);

  // handle clear cart
  const handleClearCart = (id) => {
    removeFromDb(id);
  };
  // handle all card clear
  const handleDeleteCart = () => {
    deleteShoppingCart();
    alert("card clear successfull");
  };

  return (
    <div className="container mt-5 ">
      {cart != 0 ? (
        <div>
          <div className="row">
            <div className="col-md-8">
              {cart.map((product) => (
                <CartDetails
                  product={product}
                  handleClearCart={handleClearCart}
                  key={product._id}
                ></CartDetails>
              ))}
            </div>

            <div className="col-md-4 order-summary">
              {/* <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">
                  <h4>Order Summary</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Selected Items: {quantity}</h5>
                  <p>Total: ${totalPrice}</p>
                  <p>Total Shipping Charge: ${totalShipping}</p>
                  <hr />
                  <h5 className="text-danger">Grand Total: ${grandTotal}</h5>
                </div>
                <div className="card-footer bg-transparent border-success">
                  <button
                    onClick={() => handleDeleteCart()}
                    className="btn btn-info w-100 "
                  >
                    Clear cart{" "}
                  </button>
                  <Link to={"/checkout"}>
                    <button className="btn btn-danger w-100 mt-2">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div> */}

              <OrderSummary
                grandTotal={grandTotal}
                totalShipping={totalShipping}
                quantity={quantity}
                totalPrice={totalPrice}
                handleDeleteCart={handleDeleteCart}
              ></OrderSummary>
              <div className=" bg-transparent border-success">
                <button
                  onClick={() => handleDeleteCart()}
                  className="btn btn-info w-100 "
                >
                  Clear cart
                </button>
                <Link to={"/checkout"}>
                  <button className="btn btn-danger w-100 mt-2 mb-5">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-5 mb-5"> Cart not found</h1>
      )}
    </div>
  );
};

export default Cart;
