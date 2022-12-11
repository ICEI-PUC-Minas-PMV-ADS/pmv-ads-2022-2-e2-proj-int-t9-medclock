import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Notification from "../../components/notification";
import SimpleDialog from "../../components/simple-dialog";
import { api } from "../../../services/api";

const DoctorsRegister = () => {
  const [form, setForm] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationType, setNotificationType] = useState();
  const [notificationMessage, setNotificationMessage] = useState();

  const toggleNotification = () => setIsNotificationOpen((state) => !state);

  const openNotification = (type, message) => {
    setIsNotificationOpen(true);
    setNotificationType(type);
    setNotificationMessage(message);
  };

  const toggleCloseDialog = () => setIsDialogOpen((state) => !state);

  const handleClose = () => {
    toggleCloseDialog();
    setForm(undefined);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post(`medico`, {
        ...form
      });

      handleClose();
      openNotification("success", "Médico registrado com sucesso.");
    } catch {
      openNotification("error", "Ocorreu um erro ao registrar médico.");
    }
  };

  return (
    <>
      <Button variant="contained" onClick={toggleCloseDialog}>
        Cadastrar médico
      </Button>
      <SimpleDialog
        open={isDialogOpen}
        handleClose={handleClose}
        title="Cadastrar novo médico"
        onConfirmTitle="Confirmar"
        maxWidth="sm"
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField
                label="Nome"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    nome: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="CPF"
                type="number"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    cpf: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Telefone"
                type="number"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    telefone: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Data de nascimento"
                type="date"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    dataDeNascimento: event.target.value
                      .split("-")
                      .reverse()
                      .join("/"),
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Endereço"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    endereco: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Especialidade"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    especialidade: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Login"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    login: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Senha"
                type="password"
                required
                fullWidth
                onChange={(event) =>
                  setForm({
                    ...form,
                    senha: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button type="submit">Confirmar</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </SimpleDialog>
      <Notification
        isOpen={isNotificationOpen}
        message={notificationMessage}
        handleClose={toggleNotification}
        type={notificationType}
      />
    </>
  );
};

export default DoctorsRegister;
