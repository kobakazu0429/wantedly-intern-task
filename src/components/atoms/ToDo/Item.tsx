import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

import { IToDo } from "@/models/ToDo";

class ToDoItem extends React.Component<IToDo> {
  constructor(props: IToDo) {
    super(props);
  }

  public render() {
    return (
      <ToDo onClick={this.props.toggleCompleted}>
        <span
          style={{
            textDecoration: this.props.isCompleted ? "line-through" : "none"
          }}
        >
          {this.props.text}
        </span>
        <DeleteIcon
          className="fas fa-trash"
          // onClick={} /* delete todo */
        />
      </ToDo>
    );
  }
}

const ToDo = styled.li`
  padding: 0 20px;
  list-style: none;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${color.LIGHT_GRAY};
  color: ${color.GRAY};
  font-size: 18px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: white;
  transition: background-color 1s linear;
  &:hover {
    background-color: ${color.ULTRA_LIGHT_BLUE};
  }
`;

const DeleteIcon = styled.i`
  font-size: 15px;
  line-height: 70px;
`;

export default ToDoItem;
