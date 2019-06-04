import React from "react";

import RootStore from "@/stores/RootStore";

import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";

export const RootContext = React.createContext({} as RootStore);

export default () => (
  <RootContext.Provider value={new RootStore()}>
    <Header />
    <Main />
  </RootContext.Provider>
);
