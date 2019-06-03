import ToDoStore from "./ToDoStore";

export default class RootStore {
  constructor() {
    this.ToDoStore = new ToDoStore();
  }

  public ToDoStore: ToDoStore;
}
