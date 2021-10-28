import './App.css';
import Article from './Components/ArticlePage/Article';
import Home from './Components/Home';
import Navbar from './Components/Topbar';
// import Switch from "react-router-dom"
import {Route,Switch,BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={()=><Home />} />
        <Route exact path ="/article" component={() => <Article />}/>
      </Switch>
      {/* <Index /> */}
    </div>
    </Router>
  );
}

export default App;
