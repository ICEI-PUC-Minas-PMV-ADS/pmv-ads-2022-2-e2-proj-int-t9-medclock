import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography, Box } from "@mui/material";

import "./index.css";

import ToolBar from "./components/toolbar";
import SideMenu from "./components/side-menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Box display="flex" flexDirection="column">
        <ToolBar />
        <Box display="flex">
          <SideMenu />

          <Box m={2}>
            <Routes item xs={9}>
              <Route
                exact
                path="/pacientes"
                element={<Typography>Pacientes</Typography>}
              />
              <Route
                exact
                path="/agendamentos"
                element={<Typography>Agendamentos</Typography>}
              />
              <Route
                exact
                path="/medicos"
                element={<Typography>Médicos</Typography>}
              />
              <Route
                exact
                path="/minhas-informacoes"
                element={<Typography>Minhas informacoes</Typography>}
              />
            </Routes>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
