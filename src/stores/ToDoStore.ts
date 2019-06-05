import React from "react";
import { useComputed, useObservable } from "mobx-react-lite";

import ToDo, { IToDo } from "@/models/ToDo";

export interface IToDoStore {
  getTodos: IToDo[];
  toggleCompleted: (uuid: string) => void;
  addTodo: (text: string) => void;
  deleteTodo: (uuid: string) => void;
  filtering: number;
  setFiltering: (filtering: number) => void;
}

export enum todoFilterEnum {
  All,
  Done,
  Pending
}

export const keysForSelect = {
  All: todoFilterEnum.All,
  Done: todoFilterEnum.Done,
  Pending: todoFilterEnum.Pending
};

const ToDoStore = (): IToDoStore => {
  const [filtering, setFiltering] = React.useState(0);

  const todos: IToDo[] = useObservable([]);

  const addTodo = React.useCallback((text: string) => {
    todos.push(ToDo(text));
  }, []);

  const deleteTodo = React.useCallback((uuid: string) => {
    const index = todos.findIndex(todo => todo.uuid === uuid);
    todos.splice(index, 1);
  }, []);

  const toggleCompleted = React.useCallback((uuid: string) => {
    const index = todos.findIndex(todo => todo.uuid === uuid);
    if (!todos[index]) return;
    todos[index].isCompleted = !todos[index].isCompleted;
  }, []);

  const completedTodos = React.useCallback(() => {
    return todos.filter(todo => todo.isCompleted);
  }, []);

  const incompletedTodos = React.useCallback(() => {
    return todos.filter(todo => !todo.isCompleted);
  }, []);

  const getTodos = useComputed(() => {
    switch (filtering) {
      case todoFilterEnum.All:
        return todos;

      case todoFilterEnum.Done:
        return completedTodos();

      case todoFilterEnum.Pending:
        return incompletedTodos();

      default:
        return todos;
    }
  }, [filtering]);

  return {
    getTodos,
    toggleCompleted,
    addTodo,
    deleteTodo,
    filtering,
    setFiltering
  };
};

export default ToDoStore;
