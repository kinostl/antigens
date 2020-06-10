import React from 'react';
import { Button, Section, Container, Hero, Heading } from 'react-bulma-components';

function App() {
  return (
    <div>
      <Hero size="fullheight" color="light" >
        <Hero.Body>
          <Container>
            <p className="has-text-centered">
              <Heading>AntiGens</Heading>
              <Heading subtitle size={3}>
                An A-Life inspired system for Discord servers!
              </Heading>
              <Button color="primary">Login with Discord</Button>
            </p>
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
}

export default App;
