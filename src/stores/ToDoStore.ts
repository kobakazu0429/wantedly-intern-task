import ToDo, { IToDo } from "@/models/ToDo";
import { useLocalStore } from "mobx-react-lite";

export interface IToDoStore {
  todos: IToDo[];
  addTodo: (text: string) => void;
  deleteTodo: (uuid: string) => void;
}

export default () =>
  useLocalStore<IToDoStore>(() => ({
    todos: [],
    addTodo(text: string) {
      this.todos.push(ToDo(text));
    },
    deleteTodo(uuid: string) {
      this.todos = this.todos.filter(todo => todo.uuid !== uuid);
    }
  }));
