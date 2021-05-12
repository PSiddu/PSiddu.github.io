import React from "react";
import ReactDOM from "react-dom";
//import { ChakraProvider, ColorModeScript, ThemeProvider } from "@chakra-ui/react";

import App from "./App";
//import customTheme from "./utils/Theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  rootElement
);