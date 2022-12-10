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
import DoctorsEdit from "./doctors-edit";
import DeleteDoctor from "./delete-doctor";

const DoctorsList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [doctorClicked, setDoctorClicked] = useState(null);
  const [doctors, setDoctors] = useState();

  const [isDoctorEditOpen, setIsDoctorEditOpen] = useState(false);
  const toggleDoctorEdit = () => setIsDoctorEditOpen((state) => !state);
  const [isDoctorDeleteOpen, setDoctorDeleteOpen] = useState(false);
  const toggleDoctorDelete = () => setDoctorDeleteOpen((state) => !state);

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/medico").then((response) =>
      response.json().then((data) => setDoctors(data))
    );
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event, data) => {
    setAnchorEl(event.currentTarget);
    setDoctorClicked(data);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
          <TableBody>
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
                  <IconButton onClick={(event) => handleClick(event, doctor)}>
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
        <MenuItem onClick={toggleDoctorEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Editar médico
        </MenuItem>
        <MenuItem onClick={toggleDoctorDelete}>
          <ListItemIcon>
            <CancelIcon />
          </ListItemIcon>
          Excluir médico
        </MenuItem>
      </Menu>
      <DoctorsEdit
        isOpen={isDoctorEditOpen}
        handleClose={toggleDoctorEdit}
        data={doctorClicked}
      />
      <DeleteDoctor
        isOpen={isDoctorDeleteOpen}
        handleClose={toggleDoctorDelete}
        data={doctorClicked}
      />
    </>
  );
};

export default DoctorsList;
