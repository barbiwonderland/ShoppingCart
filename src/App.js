import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { addProduct } from "./redux/slices/cartSlice";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  const basket = useSelector((state) => state.inventary);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => dispatch(addProduct(product));
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {basket.map((x) => (
            <div className="col-md-4 text-center " key={x.id}>
              <h2>{x.title}</h2>
              <img src={x.imageUrl} alt={x.title} width="250" height="250" />
              <h3>{x.desription}</h3>
              <h3>${x.price}</h3>
              <button
                className="btn btn-success"
                onClick={() => handleAddToCart(x)}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
