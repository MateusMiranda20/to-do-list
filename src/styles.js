import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ToDoList = styled.div`
  background: white;
  padding: 20px 30px;
  border-radius: 5px;
`
export const Input = styled.input`
  border: 2px solid rgba(208, 211, 212, 0.4);
  border-radius: 5px ;
  height: 25px;
  width: 250px;
  margin-right: 16px;
`
export const listItem = styled.div`
    background: #e4e4e4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 40px;
`