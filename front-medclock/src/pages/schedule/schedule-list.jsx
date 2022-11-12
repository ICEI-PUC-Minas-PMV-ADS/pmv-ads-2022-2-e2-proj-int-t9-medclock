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
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState();
  const [patients, setPatients] = useState();
  const [doctors, setDoctors] = useState();

  // useEffect(() => {
  //   fetch("https://testeappfaculmc.herokuapp.com/api/agendamento").then(
  //     (response) => response.json().then((data) => setSchedules(data))
  //   );
  // }, []);

  // useEffect(() => {
  //   fetch("https://testeappfaculmc.herokuapp.com/api/paciente").then(
  //     (response) => response.json().then((data) => setPatients(data))
  //   );
  // }, []);

  // useEffect(() => {
  //   fetch("https://testeappfaculmc.herokuapp.com/api/medico").then((response) =>
  //     response.json().then((data) => setDoctors(data))
  //   );
  // }, []);

  console.log(schedules);

  return (
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
        {/* <TableBody>
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
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
};

export default ScheduleList;
