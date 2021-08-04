import logo from "./logo.svg";
import "./App.css";
import AddProducts from "./Components/AddProducts/AddProducts";
import AllProducts from "./Components/AllProducts/AllProducts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherNew from "./Components/WeatherNew/WeatherNew";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={WeatherNew} />
          <Route path="/addprod" component={AddProducts} />
          <Route path="/allprod" component={AllProducts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
