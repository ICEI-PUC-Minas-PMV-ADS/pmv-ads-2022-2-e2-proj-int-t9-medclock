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

const PatientsList = () => {
  const [patients, setPatients] = useState();

  // useEffect(() => {
  //   fetch("https://testeappfaculmc.herokuapp.com/api/paciente").then(
  //     (response) => response.json().then((data) => setPatients(data))
  //   );
  // }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Documento</TableCell>
            <TableCell align="center">E-mail</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">Data de nascimento</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {patients?.map((patient) => (
            <TableRow
              key={patient.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {patient.nome}
              </TableCell>
              <TableCell align="center">{patient.cpf}</TableCell>
              <TableCell align="center">{patient.email}</TableCell>
              <TableCell align="center">{patient.telefone}</TableCell>
              <TableCell align="center">{patient.dataDeNascimento}</TableCell>
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

export default PatientsList;
