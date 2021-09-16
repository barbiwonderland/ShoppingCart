import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getTotals } from "../redux/slices/cartSlice";
import { store } from "../redux/store";

const Home = () => {
  const basket = useSelector((state) => state.inventary);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => dispatch(addProduct(product));
  useEffect(() => {
    dispatch(getTotals());
  }, [cart,dispatch]);
  return (
    <>
      <div className="container mb-4">
        <div className="row">
          {basket.map((x) => (
            <div className="col-md-4 text-center mb-5 " key={x.id}>
              <h2>{x.title}</h2>
              <img src={x.imageUrl} alt={x.title} width="250" height="250" />
              <h3>{x.desription}</h3>
              <h3>${x.price}</h3>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAddToCart(x)}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
