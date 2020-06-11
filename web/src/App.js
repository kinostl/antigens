import React from 'react';
import { useState } from 'react';
import { Button, Section, Container, Hero, Heading, Navbar } from 'react-bulma-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './Home';
import Landing from './Landing';
import CreateAntigen from './Antigens/create';

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
          <Link to="/antigens/create">Antigens</Link>
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
      <Route exact path="/home">
        {navBar}
        <Home />
      </Route>
      <Route exact path="/antigens/create">
        {navBar}
        <CreateAntigen />
      </Route>
    </Switch>
  )
}
function App() {

  return (
    <Router basename="/">
      <SwitchMenu />
    </Router>
  );
}

export default App;
