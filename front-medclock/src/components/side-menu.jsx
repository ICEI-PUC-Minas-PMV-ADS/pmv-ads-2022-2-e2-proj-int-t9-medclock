import {
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Toolbar,
  Container,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useState } from "react";

const drawerWidth = 240;

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText>Pacientes</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText>Agendamentos</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
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
