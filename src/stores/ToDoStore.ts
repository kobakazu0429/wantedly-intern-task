import React from "react";
import { useObservable } from "mobx-react-lite";

import ToDo, { IToDo } from "@/models/ToDo";

export interface IToDoStore {
  todos: IToDo[];
  addTodo: (text: string) => void;
  deleteTodo: (uuid: string) => void;
}

const ToDoStore = (): IToDoStore => {
  const todos: IToDo[] = useObservable([]);

  const addTodo = React.useCallback((text: string) => {
    todos.push(ToDo(text));
  }, []);

  const deleteTodo = React.useCallback((uuid: string) => {
    const index = todos.findIndex(todo => todo.uuid === uuid);
    todos.splice(index, 1);
  }, []);

  return { todos, addTodo, deleteTodo };
};

export default ToDoStore;
