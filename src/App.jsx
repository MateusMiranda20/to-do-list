
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)

  }

  function cliqueiNoBotao() {
    if(inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const deleteList = list.filter(item => item.id !== id)

    setList(deleteList)
  }

  return (
    <>
      <Container>
        <ToDoList>
          <Input onChange={inputMudou} placeholder="O que eu devo fazer?.." />
          <Button onClick={cliqueiNoBotao}>Adicionar</Button>

          <ul>
            {
              list.length > 0 ? (
                  list.map(item => (
                    <ListItem isFinished={item.finished} key={item.id}>
                      <Check onClick={() => finishTask(item.id)} />
                      <li>{item.task}</li>
                      <Trash onClick={() => deleteTask(item.id)} />
                    </ListItem>
                  ))
              ) : (
              <h4>Não há tarefas</h4>
              )
            }
          </ul>
        </ToDoList>
      </Container>

    </>
  )
}

export default App
