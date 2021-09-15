import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
