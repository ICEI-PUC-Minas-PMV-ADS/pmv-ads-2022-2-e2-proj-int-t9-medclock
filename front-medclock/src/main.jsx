import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography, Box } from "@mui/material";

import "./index.css";

import ToolBar from "./components/toolbar";
import SideMenu from "./components/side-menu";
import Patients from "./pages/patients/patients";
import Schedule from "./pages/schedule/schedule";
import Doctors from "./pages/doctors/doctors";
import InitialPage from "./pages/sign-in-up/initial-page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<InitialPage />} />
        <Route
          exact
          path="/agendamentos"
          element={
            <Box display="flex" flexDirection="column">
              <ToolBar />
              <Box display="flex">
                <SideMenu />
                <Box sx={{ width: "100%" }} m={2}>
                  <Schedule />
                </Box>
              </Box>
            </Box>
          }
        />
        <Route
          exact
          path="/pacientes"
          element={
            <Box display="flex" flexDirection="column">
              <ToolBar />
              <Box display="flex">
                <SideMenu />
                <Box sx={{ width: "100%" }} m={2}>
                  <Patients />
                </Box>
              </Box>
            </Box>
          }
        />
        <Route
          exact
          path="/medicos"
          element={
            <Box display="flex" flexDirection="column">
              <ToolBar />
              <Box display="flex">
                <SideMenu />
                <Box sx={{ width: "100%" }} m={2}>
                  <Doctors />
                </Box>
              </Box>
            </Box>
          }
        />
        <Route
          exact
          path="/minhas-informacoes"
          element={
            <Box display="flex" flexDirection="column">
              <ToolBar />
              <Box display="flex">
                <SideMenu />
                <Box sx={{ width: "100%" }} m={2}>
                  <Typography>Minhas informacoes</Typography>
                </Box>
              </Box>
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
