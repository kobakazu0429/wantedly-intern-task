import ToDoStore from "../stores/ToDoStore";

export interface IToDo {
  todo: string;
  isDone: boolean;
}

export default class ToDoModel {
  constructor(store: ToDoStore, json: IToDo) {
    this.store = store;

    const { todo, isDone } = json;
    this.todo = todo;
    this.isDone = isDone;
  }

  public store: ToDoStore;

  public todo: string;
  public isDone: boolean;
}
