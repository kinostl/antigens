import React from 'react';
import { Button, Section, Container, Hero, Heading } from 'react-bulma-components';
import {
  Link,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Hero size="fullheight" color="light" >
        <Hero.Body>
          <Container>
            <p className="has-text-centered">
              <Heading size={1}>AntiGens</Heading>
              <Heading subtitle size={2}>
                An A-Life inspired system for Discord servers!
              </Heading>
              <Link to="/home">
                <Button size="large" color="primary">Login with Discord</Button>
              </Link>
            </p>
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
}

export default App;
