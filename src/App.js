import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import {
  theme,
  ChakraProvider,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";
//import customTheme from "./utils/Theme";
//import About from "./pages/About";

const customTheme = {
  ...theme,
  initialColorMode: "light",
  useSystemColorMode: false,

  fonts: {
    heading: '"Cabin", sans-serif',
    body: '"Cabin", sans-serif',
    mono: '"Cabin", sans-serif',
    Text: '"Cabin", sans-serif',
  },
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <CSSReset />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
