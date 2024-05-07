
import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [list, setList] = useState([{ id: uuid(), task: 'Trabalhar amanhã'}])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)
    
  }

  function cliqueiNoBotao() {
    setList([ ... list, { id: uuid(), task: inputTask }])
  }

  return (
    <>
      <div>
        <input onChange={inputMudou} placeholder="O que eu devo fazer?.."/>
        <button onClick={cliqueiNoBotao}>Adicionar</button>
      </div>
      <div>
        <ul>
          {
            list.map(item => (
              <li key={item.id}>{item.task}</li>
            ))
          }
        </ul>
      </div>
    
    </>
  )
}

export default App
