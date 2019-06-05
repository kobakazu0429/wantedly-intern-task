import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import { IToDoStore } from "@/stores/ToDoStore";
import ToDoItem from "./Item";

interface IProps {
  todoStore: IToDoStore;
}

export default observer((props: IProps) => {
  const { todoStore } = props;
  const { deleteTodo, toggleCompleted } = todoStore;

  return (
    <Ul>
      {todoStore.getTodos().map(todo => {
        return (
          <ToDoItem
            key={todo.uuid}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            {...todo}
          />
        );
      })}
    </Ul>
  );
});

const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
