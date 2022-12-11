import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

import Reschedule from "./rechedule";
import CancelSchedule from "./cancel-schedule";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedScheduleId, setClickedScheduleId] = useState(null);

  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const toggleReschedule = () => setIsRescheduleOpen((state) => !state);
  const [isCancelScheduleOpen, setIsCancelScheduleOpen] = useState(false);
  const toggleCancelSchedule = () => setIsCancelScheduleOpen((state) => !state);

  const open = Boolean(anchorEl);
  const handleClick = (event, data) => {
    setAnchorEl(event.currentTarget);
    setClickedScheduleId(data);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/agendamento").then(
      (response) => response.json().then((data) => setSchedules(data))
    );
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Médico</TableCell>
              <TableCell align="center">Paciente</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedules?.map((schedule) => (
              <TableRow
                key={schedule.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {schedule?.nomeMedico}
                </TableCell>
                <TableCell align="center">{schedule?.nomePaciente}</TableCell>
                <TableCell align="center">
                  {schedule?.dataHoraAgendamento}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={(event) => handleClick(event, schedule)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={toggleReschedule}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Reagendar consulta
        </MenuItem>
        <MenuItem onClick={toggleCancelSchedule}>
          <ListItemIcon>
            <CancelIcon />
          </ListItemIcon>
          Desmarcar consulta
        </MenuItem>
      </Menu>
      <Reschedule
        isOpen={isRescheduleOpen}
        handleClose={toggleReschedule}
        data={clickedScheduleId}
      />
      <CancelSchedule
        data={clickedScheduleId}
        isOpen={isCancelScheduleOpen}
        handleClose={toggleCancelSchedule}
      />
    </>
  );
};

export default ScheduleList;
