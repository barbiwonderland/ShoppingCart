import React from "react";
import { FaBorderNone, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-between mb-5">
        <Link to="/" class="navbar-brand ms-2">
          ShoppingCart
        </Link>
        <a className=" text-light me-3" style={{textDecoration:"none"}}>
          <h3 >
            <Link
              className="text-white " style={{textDecoration:"none"}}
              to="/cart"
            >
              {" "}
              <FaShoppingCart/>
              <span style={{fontSize:"15px",textDecoration:"none",display:"inline-flex"}} >{cartTotalQuantity}</span>
            </Link>
          </h3>
        </a>{" "}
      </nav>
    </>
  );
};

export default Header;
