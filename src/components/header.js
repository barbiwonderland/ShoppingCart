import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-between mb-5">
        <a class="navbar-brand ms-2">ShoppingCart</a>
        <a className=" text-light me-3">
          <h3>
            <FaShoppingCart />
          </h3>
        </a>{" "}
      </nav>
    </>
  );
};

export default Header;
