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

const DoctorsList = () => {
  const [doctors, setDoctors] = useState();

  // useEffect(() => {
  //   fetch("https://testeappfaculmc.herokuapp.com/api/medico").then((response) =>
  //     response.json().then((data) => setDoctors(data))
  //   );
  // }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Especialidade</TableCell>
            <TableCell align="center">Documento</TableCell>
            <TableCell align="center">E-mail</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {doctors?.map((doctor) => (
            <TableRow
              key={doctor.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {doctor.nome}
              </TableCell>
              <TableCell align="center">{doctor.especialidade}</TableCell>
              <TableCell align="center">{doctor.cpf}</TableCell>
              <TableCell align="center">{doctor.email}</TableCell>
              <TableCell align="center">{doctor.telefone}</TableCell>
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

export default DoctorsList;
