import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";

import SimpleDialog from "../../components/simple-dialog";
import Notification from "../../components/notification";

const PatientsEdit = ({ data, isOpen, handleClose }) => {
  const [form, setForm] = useState();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationType, setNotificationType] = useState();
  const [notificationMessage, setNotificationMessage] = useState();

  useEffect(
    () =>
      setForm({
        nome: data?.nome,
        cpf: data?.cpf,
        dataDeNascimento: data?.dataDeNascimento,
        telefone: data?.telefone,
        endereco: data?.endereco,
        email: data?.email,
        alergia: data?.alergia,
        flagMaiorIdade: data?.flagMaiorIdade,
        responsavel: data?.responsavel,
        login: data?.login,
        senha: data?.senha,
      }),
    [data]
  );

  const toggleNotification = () => setIsNotificationOpen((state) => !state);

  const openNotification = (type, message) => {
    setIsNotificationOpen(true);
    setNotificationType(type);
    setNotificationMessage(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      fetch(`https://testeappfaculmc.herokuapp.com/api/paciente/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(form),
      });

      handleClose();
      openNotification("success", "Paciente editado com sucesso.");
    } catch {
      openNotification("error", "Ocorreu um erro ao editar paciente.");
    }
  };

  return isOpen && data ? (
    <>
      <SimpleDialog
        title="Editar paciente"
        open={isOpen}
        handleClose={handleClose}
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
                defaultValue={data.nome}
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
                defaultValue={data.email}
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
                required
                fullWidth
                defaultValue={data.cpf}
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
                required
                fullWidth
                defaultValue={data.telefone}
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
                defaultValue={data.dataDeNascimento
                  .split("/")
                  .reverse()
                  .join("-")}
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
                defaultValue={data.endereco}
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
                label="Alergias"
                required
                fullWidth
                defaultValue={data.alergia}
                onChange={(event) =>
                  setForm({
                    ...form,
                    alergia: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Login"
                required
                fullWidth
                defaultValue={data.login}
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
                defaultValue={data.senha}
                onChange={(event) =>
                  setForm({
                    ...form,
                    senha: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked={data.flagMaiorIdade === 1 ? true : false}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        flagMaiorIdade: event.target.checked,
                      })
                    }
                  />
                }
                label="É maior de idade?"
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
  ) : null;
};

export default PatientsEdit;
