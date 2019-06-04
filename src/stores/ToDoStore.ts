import React from "react";
import { useObservable } from "mobx-react-lite";

import ToDo, { IToDo } from "@/models/ToDo";

export interface IToDoStore {
  todos: IToDo[];
  completedTodos: () => IToDo[];
  incompletedTodos: () => IToDo[];
  toggleCompleted: (uuid: string) => void;
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

  return {
    todos,
    completedTodos,
    incompletedTodos,
    toggleCompleted,
    addTodo,
    deleteTodo
  };
};

export default ToDoStore;
