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
      <Route exact path="/home">
        {navBar}
        <Home />
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
