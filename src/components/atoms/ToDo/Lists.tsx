import React from "react";
import styled from "styled-components";

import RootStore from "@/stores/RootStore";
import { IToDo } from "@/models/ToDo";
import ToDoItem from "./Item";

interface IProps {
  rootStore: RootStore;
}

class ToDoLists extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.todos = this.props.rootStore.todoStore.todos;
  }

  public todos: IToDo[];

  public render() {
    return (
      <Ul>
        {this.todos.map(todo => (
          <ToDoItem {...todo} />
        ))}
      </Ul>
    );
  }
}

const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default ToDoLists;
