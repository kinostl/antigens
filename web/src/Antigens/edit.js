import React, { useState } from 'react';
import {
  Button,
  Section,
  Container,
  Box,
  Hero,
  Heading,
  Form,
  Columns,
  Content
} from 'react-bulma-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import arrayMove from 'array-move';
import {
  Link,
  useRouteMatch
} from "react-router-dom";

function App(url) {
  return (
    <div>
      <Section>
        <Container>
          <Heading>SugarSnap</Heading>
          <Link to={`${url}/view`}>View Profile</Link>
          <Columns>
            <Columns.Column>
              <Form.Field>
                <Form.Label>Stats</Form.Label>
                <Form.Control>
                  <Button>Mettaur</Button>
                  <Button>Bunny</Button>
                  <Button>Cannodumb</Button>
                  <Button>Fishy</Button>
                  <Button>Spooky</Button>
                  <Button>Ratty</Button>
                </Form.Control>
              </Form.Field>
            </Columns.Column>
            <Columns.Column>
              <Form.Label>Scores</Form.Label>
              <Content>
                <p><strong>Mind</strong> 3</p>
                <p><strong>Body</strong> 2</p>
                <p><strong>Soul</strong> 1</p>
              </Content>

            </Columns.Column>
            <Columns.Column>
              <Form.Label>Calculations</Form.Label>
              <Content>
                <p><strong>Folder</strong> 9</p>
                <p><strong>Health</strong> 4</p>
                <p><strong>Capacity</strong> 2</p>
              </Content>

            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              Chips Inventory
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </Columns.Column>
            <Columns.Column>
              Chips Equipped
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </Columns.Column>
            <Columns.Column>
              AddOns Inventory
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </Columns.Column>
            <Columns.Column>
              AddOns Equipped
              <Box></Box>
              <Box></Box>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}

export default App;
