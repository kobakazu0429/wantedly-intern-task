import ToDoModel, { IToDo } from "../models/ToDoModel";

export default class ToDoStore {
  public createToDo(json: IToDo) {
    return new ToDoModel(this, json);
  }
}
