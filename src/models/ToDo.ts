import { v4 as uuidV4 } from "uuid";

export interface IToDo {
  text: string;
  isCompleted: boolean;
  uuid: string;
}

const ToDo = (text: string): IToDo => ({
  text,
  isCompleted: false,
  uuid: uuidV4()
});

export default ToDo;
