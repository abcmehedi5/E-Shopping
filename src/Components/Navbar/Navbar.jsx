import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { getShoppingCart } from "../../utilities/fakedb";
import { AuthContext } from "../Provider/AuthProvider";
import { MdLogout } from "react-icons/md";
import Loading from "../../Loading/Loading";
import { sweetSuccess } from "../../utilities/SweetAlert/SweetAlert";
import { FidgetSpinner } from "react-loader-spinner";
const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { user, spinner, logOut } = useContext(AuthContext);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
    }
    // step 5: set the cart
    setCart(savedCart);
  }, []);

  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
  }

  // handle singout
  const handleSingout = () => {
    logOut();
    sweetSuccess("logout successfull");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#DCDFDD" }}
    >
      <div className="container-fluid container">
        <Link className="navbar-brand fw-bold" to={"/"}>
          E-SHOPPING
        </Link>
        <span>
          {spinner ? (
            <FidgetSpinner
              visible={true}
              height="40"
              width="40"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={["#ff0000", "#00ff00", "#0000ff"]}
              backgroundColor="#F4442E"
            />
          ) : (
            user?.displayName
          )}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav menuli m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item me-3">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"/"}>Order</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"/"}>Contacts</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"/"}>Blog</NavLink>
            </li>
       
            {!user && (
              <li className="nav-item me-3">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}
            {!user && (
              <li className="nav-item me-3">
                <NavLink to={"/register"}>Registration</NavLink>
              </li>
            )}
          </ul>
          <div className="nav-right d-flex align-items-center">
            {/* log out button */}
            <span onClick={() => handleSingout()}>
              {user && (
                <button className="btn btn-primary me-3">
                  <MdLogout size={20} /> Logout
                </button>
              )}
            </span>
            <Link to={"/cart"}>
              <button type="button" className=" cartBtn position-relative">
                <i className="fa-solid  fs-2 fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
