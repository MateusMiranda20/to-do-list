import { v4 as uuid } from 'uuid';


function App() {

  const list = [
    { id: uuid(), task: "Trabalhar amanhã"},
    {id: uuid(), task: "Estudar React"}
  ]
  //"Trampar amanhã", "Acordar amanhã cedo", "Descansar"

  function inputMudou(event) {
    console.log(event.target.value)
  }

  function cliqueiNoBotao() {
    console.log('Cliquei no botão')
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
