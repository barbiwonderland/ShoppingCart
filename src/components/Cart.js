import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartResult =
    cart.cartItems.length === 0 ? (
      <div className="empty">
        <h2>No hay elementos agregados</h2> <Link to="/">Seguir comprando</Link>
      </div>
    ) : (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.cartItems.map((x) => (
            <tr key={x.id}>
              <td>
                {" "}
                <img src={x.imageUrl} width="50" alt={x.title} />
                {x.title}
              </td>
              <td>{x.price}</td>
              <td>
                <div className="border d-inline-block">
                  <button className="btn  shadow-none">-</button>
                  {x.cartQuantity}{" "}
                  <button className="btn shadow-none">+</button>
                </div>
              </td>
              <td>{x.price * x.cartQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">{cartResult}</div>
        </div>

        <div className="d-flex justify-content-between mb-5">
          <div>
            <button className="btn border shadow-none ">Limpiar Carrito</button>
          </div>
          <div className="text-center">
            <h4>Subtotal $100</h4>
            <button className="btn border shadow-none">Continuar Comprando</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
