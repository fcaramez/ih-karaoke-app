import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth.context";
import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "./context/toast.context";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const chakraTheme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={chakraTheme}>
        <GlobalStyle />
        <AuthProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </AuthProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
