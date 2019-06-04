import React from "react";
import { useObserver } from "mobx-react-lite";

import { RootContext } from "@/components/App";
import ToDoLists from "@/components/atoms/ToDo/Lists";

export default () => {
  const rootStore = React.useContext(RootContext);
  const { todoStore } = rootStore;
  return useObserver(() => <ToDoLists todoStore={todoStore} />);
};
