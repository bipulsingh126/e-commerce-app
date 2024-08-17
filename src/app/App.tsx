"use client";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const App = ({children}: {children: React.ReactNode}) => {
  return <Provider store={store} >{children}</Provider>
};

export default App;
