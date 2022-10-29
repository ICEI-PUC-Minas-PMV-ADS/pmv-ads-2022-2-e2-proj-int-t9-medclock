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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Box display="flex" flexDirection="column">
        <ToolBar />
        <Box display="flex">
          <SideMenu />

          <Box sx={{ width: "100%" }} m={2}>
            <Routes>
              <Route exact path="/agendamentos" element={<Schedule />} />
              <Route exact path="/pacientes" element={<Patients />} />
              <Route exact path="/medicos" element={<Doctors />} />
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
