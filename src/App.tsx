import { Provider } from "react-redux";
import Sidebar from "@components/sidebarMenu/Sidebar";

import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContainer } from "./styles";
import { store } from "./redux/store";
import { Routes, routes } from "@routes/routes";
const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppContainer>
          <Sidebar />
          <Routes />
        </AppContainer>
        <ToastContainer theme="colored" />
      </HashRouter>
    </Provider>
  );
};

export default App;
