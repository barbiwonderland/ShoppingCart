import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
