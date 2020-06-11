import React, { useState } from 'react';
import {
  Button,
  Section,
  Container,
  Hero,
  Heading,
  Form
} from 'react-bulma-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import arrayMove from 'array-move';

function App() {
  const [stats, setStats] = useState(['Body', 'Mind', 'Soul'])
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
          <Form.Field>
            <Form.Label>Stats</Form.Label>
            <Form.Control>
              <DragDropContext onDragEnd={(res) => {
                if (!res.destination) {
                  return;
                }

                setStats(
                  arrayMove(stats, res.source.index, res.destination.index)
                )
              }}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {stats.map((item, index) => (
                        <Draggable key={item} draggableId={item} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {item}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Form.Control>
          </Form.Field>
        </Container>
      </Section>
    </div>
  );
}

export default App;
