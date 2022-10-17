import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const drawerWidth = 240;

const SideMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />

      <List component="nav">
        <ListItemButton
          selected={pathname === "/pacientes"}
          onClick={() => navigate("/pacientes")}
        >
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText>Pacientes</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={pathname === "/agendamentos"}
          onClick={() => navigate("/agendamentos")}
        >
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText>Agendamentos</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={pathname === "/medicos"}
          onClick={() => navigate("/medicos")}
        >
          <ListItemIcon>
            <LocalHospitalIcon />
          </ListItemIcon>
          <ListItemText>Médicos</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default SideMenu;
