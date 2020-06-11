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
  const [stats, setStats] = useState([
    {
      'stat': 'Mind',
      'color': '#3298dc',
    },
    {
      'stat': 'Body',
      'color': '#f14668',
    },
    {
      'stat': 'Soul',
      'color': '#48c774',
    }
  ])

  const [calcs, setCalcs] = useState({
    mind: 3, body: 2, soul: 1,
    folder: 6, health: 6, capacity: 2
  })
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
                  <DragDropContext onDragEnd={(res) => {
                    if (!res.destination) {
                      return;
                    }
                    let newStats = arrayMove(stats, res.source.index, res.destination.index);
                    let newCalcs=newStats.reduce((acc, curr, idx)=>{
                      if(curr.stat==='Body'){
                        acc.body = 3-idx;
                        acc.health = acc.body*3;
                      }
                      if(curr.stat==='Mind'){
                        acc.mind = 3-idx;
                        acc.folder = acc.mind*2;
                      }
                      if(curr.stat==='Soul'){
                        acc.soul = 3-idx;
                        acc.capacity = acc.soul*2;
                      }
                      return acc
                    },{})


                    setStats(newStats)
                    setCalcs(newCalcs)
                  }}>
                    <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {stats.map((item, index) => (
                            <Draggable key={item.stat} draggableId={item.stat} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Box
                                    style={{
                                      backgroundColor: item.color,
                                      color: 'white'
                                    }}>
                                    {item.stat}
                                  </Box>
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
