import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-between mb-5">
        <Link to="/" class="navbar-brand ms-2">ShoppingCart</Link>
        <a className=" text-light me-3">
          <h3>
            <Link className="text-white" to="/cart">
              {" "}
              <FaShoppingCart />
            </Link>
          </h3>
        </a>{" "}
      </nav>
    </>
  );
};

export default Header;
