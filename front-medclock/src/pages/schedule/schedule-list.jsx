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

import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import Reschedule from "./rechedule";
import CancelSchedule from "./cancel-schedule";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState();
  const [patients, setPatients] = useState();
  const [doctors, setDoctors] = useState();
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

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/paciente").then(
      (response) => response.json().then((data) => setPatients(data))
    );
  }, []);

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/medico").then((response) =>
      response.json().then((data) => setDoctors(data))
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
                  {
                    doctors?.find((doctor) => doctor.id === schedule.idMedico)
                      .nome
                  }
                </TableCell>
                <TableCell align="center">
                  {
                    patients?.find(
                      (patient) => patient.id === schedule.idPaciente
                    ).nome
                  }
                </TableCell>
                <TableCell align="center">
                  {schedule?.dataHoraAgendamento}
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    key={`${schedule.id} ID AQUI`}
                    onClick={(event) => handleClick(event, schedule)}
                  >
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
