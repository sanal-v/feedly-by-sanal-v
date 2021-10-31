import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useState, createContext } from "react";

import Article from "./Components/ArticlePage/Article";
import Home from "./Components/Home";
import Topbar from "./Components/Topbar";
import UnknownPage from "./Components/UnknownPage";

export const FilterContext = createContext();

function App() {

  const [filter, setFilter] = useState([
    "national",
    "world",
    "business",
    "sports"
  ]);
  const [categories, setCategories] = useState({
    "national":true,
    "world":true,
    "business":true,
    "sports":true
  });

  const [archived, setArchived] = useState({archived:true})

  return (
    <Router>
      <FilterContext.Provider value={{ categories, setCategories, filter, setFilter, archived, setArchived}}>
        <div>
          <Topbar />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/article/:category/:slug" component={() => <Article />} />
            <Route exact path="*" component={() => <UnknownPage />}/>
          </Switch>
        </div>
      </FilterContext.Provider>
    </Router>
  );
}

export default App;
