import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme";

import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter } from "react-router-dom";

import "@fontsource/vazirmatn";

ReactDOM.createRoot(
    document.getElementById("root")!
).render(

<React.StrictMode>

<BrowserRouter>

<ThemeProvider theme={theme}>

<CssBaseline/>

<App/>

</ThemeProvider>

</BrowserRouter>

</React.StrictMode>

);