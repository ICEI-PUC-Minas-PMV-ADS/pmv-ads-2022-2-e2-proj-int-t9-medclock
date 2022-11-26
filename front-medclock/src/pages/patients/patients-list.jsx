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
import PatientsEdit from "./patients-edit";

const PatientsList = () => {
  const [patients, setPatients] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [patientClicked, setPatientClicked] = useState(null);

  const [isPatientsEditOpen, setIsPatientsEditOpen] = useState(false);
  const togglePatientsEdit = () => setIsPatientsEditOpen((state) => !state);

  const open = Boolean(anchorEl);
  const handleClick = (event, data) => {
    setAnchorEl(event.currentTarget);
    setPatientClicked(data);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/paciente").then(
      (response) => response.json().then((data) => setPatients(data))
    );
  }, []);

  return (
    <>
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
          <TableBody>
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
                  <IconButton onClick={(event) => handleClick(event, patient)}>
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
        <MenuItem onClick={togglePatientsEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Editar paciente
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CancelIcon />
          </ListItemIcon>
          Excluir paciente
        </MenuItem>
      </Menu>
      <PatientsEdit
        isOpen={isPatientsEditOpen}
        handleClose={togglePatientsEdit}
        data={patientClicked}
      />
    </>
  );
};

export default PatientsList;
