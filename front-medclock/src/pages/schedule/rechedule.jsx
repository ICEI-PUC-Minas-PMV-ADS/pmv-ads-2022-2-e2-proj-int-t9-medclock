import { Box, Button, TextField, Typography } from "@mui/material";
import { format, isAfter } from "date-fns";
import { useEffect, useMemo, useState } from "react";

import { api } from "../../../services/api"
 
import AutocompleteInput from "../../components/autocomplete-input";
import Notification from "../../components/notification";
import SimpleDialog from "../../components/simple-dialog";

const Reschedule = ({ data, isOpen, handleClose }) => {
  const [form, setForm] = useState();
  const [doctors, setDoctors] = useState();
  const [patients, setPatients] = useState();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationType, setNotificationType] = useState();
  const [notificationMessage, setNotificationMessage] = useState();

  useEffect(
    () =>
      setForm({
        idMedico: data?.medico.id,
        idPaciente: data?.paciente.id,
        dataHoraAgendamento: data?.dataHoraAgendamento,
      }),
    [data]
  );

  const toggleNotification = () => setIsNotificationOpen((state) => !state);

  const openNotification = (type, message) => {
    setIsNotificationOpen(true);
    setNotificationType(type);
    setNotificationMessage(message);
  };

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/medico").then((response) =>
      response.json().then((data) => setDoctors(data))
    );
  }, []);

  useEffect(() => {
    fetch("https://testeappfaculmc.herokuapp.com/api/paciente").then(
      (response) => response.json().then((data) => setPatients(data))
    );
  }, []);

  const doctorOptions = useMemo(
    () =>
      doctors?.map((item) => ({
        id: item.id,
        label: item.nome,
      })),
    [doctors]
  );

  const patientOptions = useMemo(
    () =>
      patients?.map((item) => ({
        id: item.id,
        label: item.nome,
      })),
    [patients]
  );

  const isDateValid = useMemo(
    () => isAfter(new Date(), new Date(form?.dataHoraAgendamento)),
    [isAfter, form]
  );

  const defaultDoctor = useMemo(
    () =>
      isOpen ? doctors?.find((item) => item.id === data?.medico.id).nome : "",
    [doctors, data, isOpen]
  );

  const defaultPatient = useMemo(
    () =>
      isOpen
        ? patients?.find((item) => item.id === data?.paciente.id).nome
        : "",
    [doctors, data, isOpen]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.put(`agendamento/${data.id}`, {
        ...form
    });

      handleClose();
      openNotification("success", "Consulta remarcada com sucesso.");
    } catch {
      openNotification("error", "Ocorreu um erro ao remarcar consulta.");
    }
  };

  return isOpen && data ? (
    <>
      <SimpleDialog
        title="Reagendar consulta"
        open={isOpen}
        handleClose={handleClose}
        maxWidth="xs"
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2} my={2}>
            <AutocompleteInput
              label="Médico"
              options={doctorOptions}
              onChange={(_, value) => setForm({ ...form, idMedico: value.id })}
              defaultValue={defaultDoctor}
              required
            />
            <AutocompleteInput
              label="Paciente"
              options={patientOptions}
              onChange={(_, value) =>
                setForm({ ...form, idPaciente: value.id })
              }
              defaultValue={defaultPatient}
              required
            />
            <Typography variant="caption">
              Data atual: {data.dataHoraAgendamento}
            </Typography>
            <TextField
              label="Nova data"
              type="datetime-local"
              onChange={(event) =>
                setForm({
                  ...form,
                  dataHoraAgendamento: format(
                    new Date(event.target.value),
                    "dd/MM/yyyy HH:mm"
                  ),
                })
              }
              error={isDateValid}
              helperText={!isDateValid || "A data não pode ser antes de hoje"}
              required
              fullWidth
            />
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" disabled={isDateValid}>
                Confirmar
              </Button>
            </Box>
          </Box>
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

export default Reschedule;
