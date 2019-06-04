import ToDoStore, { IToDoStore } from "./ToDoStore";

export default class RootStore {
  constructor() {
    this.todoStore = ToDoStore();
  }

  public todoStore: IToDoStore;
}
