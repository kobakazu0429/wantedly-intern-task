import React from "react";
import styled from "styled-components";

import { IToDoStore } from "@/stores/ToDoStore";
import ToDoItem from "./Item";

interface IProps {
  todoStore: IToDoStore;
}

export default (props: IProps) => {
  const store = props.todoStore;

  return (
    <Ul>
      {store.todos.map(todo => (
        <ToDoItem key={todo.uuid} {...todo} />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
