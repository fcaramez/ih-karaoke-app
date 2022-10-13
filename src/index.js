import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {},
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const chakraTheme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
