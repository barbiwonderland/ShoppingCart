import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/cartSlice";
import Footer from "./footer";
import Header from "./header";

const Home = () => {
  const basket = useSelector((state) => state.inventary);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => dispatch(addProduct(product));
  return (
    <>
 
      <div className="container">
        <div className="row">
          {basket.map((x) => (
            <div className="col-md-4 text-center " key={x.id}>
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
