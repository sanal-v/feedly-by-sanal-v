import "./App.css";
import Article from "./Components/ArticlePage/Article";
import Home from "./Components/Home";
import Navbar from "./Components/Topbar";
// import Switch from "react-router-dom"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useState, createContext } from "react";

export const FilterContext = createContext();

function App() {
  const [filter, setFilter] = useState([
    "national",
    "world",
    "business",
    "sports"
  ]);

  return (
    <Router>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/article" component={() => <Article />} />
          </Switch>
        </div>
      </FilterContext.Provider>
    </Router>
  );
}

export default App;
