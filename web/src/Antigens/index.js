import React from 'react';
import { useState } from 'react';
import { Menu, Columns, Button, Section, Container, Hero, Heading, Navbar } from 'react-bulma-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import CreateAntigen from './create';
import ViewAntigen from './view';

function App() {
  return (
    <div>
      <Columns>
        <Columns.Column size="one-fifth">
          <Menu>
            <Menu.List title="Gerry Gancer Dames">
              <Menu.List.Item active>
                <Link to="/antigens">New Antigen</Link>
              </Menu.List.Item>
              <Menu.List.Item>
                <Link to="/antigens/view">
                  SugarSnap
                  </Link>
              </Menu.List.Item>
            </Menu.List>
          </Menu>
        </Columns.Column>
        <Columns.Column>
          <Route path="antigens/">
            <CreateAntigen />
          </Route>
          <Route path="antigens/view">
            <div>
              H
              </div>
          </Route>
        </Columns.Column>
      </Columns>
    </div>
  )
}

export default App;
