import { useLocalStore } from "mobx-react-lite";
import { v4 as uuidV4 } from "uuid";

export interface IToDo {
  text: string;
  isCompleted: boolean;
  uuid?: string;
  toggleCompleted?: () => void;
}

const ToDo = (text: string) =>
  useLocalStore<IToDo>(() => ({
    text,
    isCompleted: false,
    uuid: uuidV4(),
    toggleCompleted() {
      this.isCompleted = !this.isCompleted;
    }
  }));

export default ToDo;