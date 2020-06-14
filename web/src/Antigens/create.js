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

function App() {
  const [calcs, setCalcs] = useState({
    mind: 3, body: 2, soul: 1,
    folder: 6, health: 6, capacity: 2
  })

  const setArray = (body, mind, soul, antigen) => {
    let acc={}
    acc.body=body;
    acc.health = body*3;
    acc.mind=mind;
    acc.folder = mind*2;
    acc.soul=soul;
    acc.capacity = soul*2;
    acc.antigen = antigen;

    setCalcs(acc)
  }

  return (
    <div>
      <Section>
        <Container>
          <Heading>Create Antigen</Heading>
          <Form.Field>
            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input type="text" placeholder="Sugarsnap" />
            </Form.Control>
          </Form.Field>
          <Columns>
            <Columns.Column>
              <Form.Field>
                <Form.Label>Stats</Form.Label>
                <Form.Control>
                  <Button onClick={()=>setArray(3,2,1,'mettaur')}>Mettaur</Button>
                  <Button onClick={()=>setArray(2,1,3,'bunny')}>Bunny</Button>
                  <Button onClick={()=>setArray(1,3,2,'cannodumb')}>Cannodumb</Button>
                  <Button onClick={()=>setArray(1,2,3,'fishy')}>Fishy</Button>
                  <Button onClick={()=>setArray(2,3,1,'spooky')}>Spooky</Button>
                  <Button onClick={()=>setArray(3,1,2,'ratty')}>Ratty</Button>
                </Form.Control>
              </Form.Field>
            </Columns.Column>
            <Columns.Column>
              <Form.Label>Scores</Form.Label>
              <Content>
                <p><strong>Mind</strong> {calcs.mind}</p>
                <p><strong>Body</strong> {calcs.body}</p>
                <p><strong>Soul</strong> {calcs.soul}</p>
              </Content>

            </Columns.Column>
            <Columns.Column>
              <Form.Label>Calculations</Form.Label>
              <Content>
                <p><strong>Folder</strong> {calcs.folder}</p>
                <p><strong>Health</strong> {calcs.health}</p>
                <p><strong>Capacity</strong> {calcs.capacity}</p>
              </Content>

            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}

export default App;
