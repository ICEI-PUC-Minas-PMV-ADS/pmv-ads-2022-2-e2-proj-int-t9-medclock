import { useEffect, useState, useMemo } from "react";
import { Box, Button, TextField } from "@mui/material";
import { isAfter } from "date-fns";
import axios from "axios";

import AutocompleteInput from "../../components/autocomplete-input";
import SimpleDialog from "../../components/simple-dialog";
import Notification from "../../components/notification";
import { api } from "../../../services/api";

const ScheduleRegister = () => {
  const [doctors, setDoctors] = useState();
  const [patients, setPatients] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationType, setNotificationType] = useState();
  const [notificationMessage, setNotificationMessage] = useState();

  const [form, setForm] = useState();
  const toggleCloseDialog = () => setIsDialogOpen((state) => !state);
  const toggleNotification = () => setIsNotificationOpen((state) => !state);

  const openNotification = (type, message) => {
    setIsNotificationOpen(true);
    setNotificationType(type);
    setNotificationMessage(message);
  };

  const handleClose = () => {
    toggleCloseDialog();
    setForm(undefined);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(form)

    // try {
    //   await fetch("https://testeappfaculmc.herokuapp.com/api/agendamento", {
    //     headers: {
    //       'Accept': 'application/json, text/plain',
    //       'Content-Type': 'application/json;charset=UTF-8'            },
    //     mode: 'no-cors',
    //     method: "POST",
    //     body: form,
    //   });

    //   openNotification("success", "Consulta agendada com sucesso.");
    // } catch {
    //   openNotification("error", "Ocorreu um erro ao agendar consulta.");
    // }

    api.post("agendamento", form).then( (response)=>{

      if(response.state >= 200 && response.state < 300){
        openNotification("success", "Consulta agendada com sucesso.");
        return
      } 
      openNotification("error", "Ocorreu um erro ao agendar consulta.");
        
    });
  };

  const chageDate = (d)=>{
    let array = d.split('')
    let dateFormater = array[8] + array[9] + "/" +  array[5] + array[6] + "/" + array[0] + array[1] + array[2] + array[3] + " " + array[11] + array[12] + ":" + array[14] + array[15]
    return dateFormater
  }

  const isDateValid = useMemo(
    () => isAfter(new Date(), new Date(form?.dataHoraAgendamento)),
    [isAfter, form]
  );

  return (
    <>
      <Button variant="contained" onClick={toggleCloseDialog}>
        Nova consulta
      </Button>
      <SimpleDialog
        open={isDialogOpen}
        handleClose={handleClose}
        title="Agendar nova consulta"
        onConfirmTitle="Confirmar"
        maxWidth="xs"
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2} my={2}>
            <AutocompleteInput
              label="Médico"
              options={doctorOptions}
              onChange={(_, value) => setForm({ ...form, idMedico: value.id })}
              required
            />
            <AutocompleteInput
              label="Paciente"
              options={patientOptions}
              onChange={(_, value) =>
                setForm({ ...form, idPaciente: value.id })
              }
              required
            />
            <TextField
              label="Data"
              type="datetime-local"
              onChange={(event) =>
                setForm({
                  ...form,
                  dataHoraAgendamento: chageDate(event.target.value),
                })
              }
              error={isDateValid}
              helperText={!isDateValid || "A data não pode ser antes de hoje"}
              required
              fullWidth
            />
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit">Confirmar</Button>
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
  );
};

export default ScheduleRegister;
