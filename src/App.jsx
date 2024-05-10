
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem} from './styles.js'

import { FcCheckmark, FcEmptyTrash  } from "react-icons/fc";

function App() {

  const [list, setList] = useState([{ id: uuid(), task: 'Trabalhar amanhã' }])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)

  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task: inputTask }])
  }

  return (
    <>
      <Container>
       <ToDoList>
       <Input onChange={inputMudou} placeholder="O que eu devo fazer?.." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.map(item => (
             <ListItem>
                <FcCheckmark />
                <li key={item.id}> {item.task}</li>
                <FcEmptyTrash />
             </ListItem>
            ))
          }
        </ul>
       </ToDoList>
      </Container>

    </>
  )
}

export default App
