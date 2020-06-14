import React from 'react';
import { useState } from 'react';
import { Button, Section, Container, Hero, Heading, Navbar } from 'react-bulma-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './Home';
import Landing from './Landing';
import Antigens from './Antigens/index';

function SwitchMenu() {
  const [menuIsActive, toggleMenuIsActive] = useState(false);
  let location = useLocation();
  React.useEffect(() => toggleMenuIsActive(false), [location]);

  let navBar = (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>
          <Link to="/home">Home</Link>
        </Navbar.Item>
        <Navbar.Burger onClick={() => toggleMenuIsActive(!menuIsActive)} />
      </Navbar.Brand>
      <Navbar.Menu className={menuIsActive ? 'is-active' : ''}>
        <Navbar.Item href="#">
          <Link to="/antigens">Antigens</Link>
        </Navbar.Item>
        <Navbar.Container position="end">
          <Navbar.Item href="#">
            <Link to="/">Log Out</Link>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )

  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        {navBar}
        <Home />
      </Route>
      <Route path="/antigens">
        {navBar}
        <Antigens />
      </Route>
    </Switch>
  )
}
function App() {

  return (
    <Router>
      <SwitchMenu />
    </Router>
  );
}

export default App;
