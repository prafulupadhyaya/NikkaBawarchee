import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Food from './Food';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Beverages from './Beverages';
function App() {
  return (
    <div className="mainContainer">

        <Banner></Banner>
        <Router>
          <div className='options'>
            <NavLink to="/food" className='optionFood'>FOOD</NavLink>
            <NavLink to="/beverages" className='optionBev'>BEVERAGES</NavLink>
            <NavLink to="/snacks" className='optionSnacks'>SNACKS</NavLink>
          </div>
          <Switch>
          <Route exact path="/food">
            <Food />
          </Route>
          <Route exact path="/beverages">
            <Beverages />
          </Route>
          <Route exact path="/snacks">
            <Beverages />
          </Route>
          <Route exact path="/">
          <Food />
          </Route>
        </Switch>

        </Router>
        
        
    </div>

  );
}

export default App;
