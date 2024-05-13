import styled from "styled-components";

import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

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

  ul{
    padding: 0;
    margin-top: 50px;
  }
`
export const Input = styled.input`
  border: 2px solid rgba(208, 211, 212, 0.4);
  border-radius: 5px ;
  height: 40px;
  width: 340px;
  margin-right: 35px;
`
export const Button = styled.button`
  background: #2ec;
  border-radius: 5px;
  font-weight: 900;
  font-size: 15px;
  line-height: 2px;
  height: 40px;
  border: none;
  color: black;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.6;
  }
  
`
export const ListItem = styled.div`
  background: ${props => props.isFinished ? '#e87' : '#e4e4e4'};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 12px;
  width: 500px;

  li{
    list-style: none;
  }
`
export const Check = styled(FcCheckmark) `
  cursor: pointer;
`
export const Trash = styled(FcEmptyTrash) `
  cursor: pointer;
`