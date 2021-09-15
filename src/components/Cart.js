import React, { useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import {
  addProduct,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/slices/cartSlice";
const Cart = () => {
  //Redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // Functions
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncrease = (cartItem) => {
    dispatch(addProduct(cartItem));
  };
  const clear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const cartResult =
    cart.cartItems.length === 0 ? (
      <div className="empty">
        <h2>No hay elementos agregados</h2>{" "}
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          {" "}
          <BsArrowReturnLeft />
          Empezar a comprar
        </Link>
      </div>
    ) : (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col" className="text-end">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.map((x) => (
              <tr key={x.id}>
                <td>
                  <img src={x.imageUrl} width="50" alt={x.title} />
                  {x.title}
                  <button
                    className="btn shadow-none "
                    onClick={() => handleRemoveFromCart(x)}
                  >
                    <FiDelete style={{ fontSize: "20px" }}></FiDelete>
                  </button>
                </td>
                <td>{x.price}</td>
                <td>
                  <div className="border d-inline-block">
                    <button
                      className="btn  shadow-none"
                      onClick={() => handleDecrease(x)}
                    >
                      -
                    </button>
                    {x.cartQuantity}{" "}
                    <button
                      className="btn shadow-none"
                      onClick={() => handleIncrease(x)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="d-flex justify-content-end align-items-center">
                    ${x.price * x.cartQuantity}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between mb-5">
          <div>
            <button className="btn border shadow-none " onClick={() => clear()}>
              Limpiar Carrito
            </button>
          </div>
          <div className="text-center">
            <h4>Subtotal $ {cart.cartTotalAmount}</h4>
            <button className="btn border shadow-none">
              Continuar Comprando
            </button>
          </div>
        </div>
      </>
    );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">{cartResult}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
