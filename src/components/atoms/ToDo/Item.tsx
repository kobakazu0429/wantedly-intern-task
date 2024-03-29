import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

import { IToDo } from "@/models/ToDo";
import { IToDoStore } from "@/stores/ToDoStore";

interface IProps
  extends IToDo,
    Pick<IToDoStore, "deleteTodo" | "toggleCompleted"> {}

export default (props: IProps) => {
  const { text, isCompleted, uuid, deleteTodo, toggleCompleted } = props;

  const handleDelete = React.useCallback(() => {
    deleteTodo(uuid);
  }, []);

  const handleCompleted = React.useCallback(() => {
    toggleCompleted(uuid);
  }, []);

  return (
    <ToDo onClick={handleCompleted}>
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none"
        }}
      >
        {text}
      </span>
      <DeleteIcon className="fas fa-trash" onClick={handleDelete} />
    </ToDo>
  );
};

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
