import { Box, Button, TextField, Typography } from "@mui/material";
import { isAfter } from "date-fns";
import { useEffect, useMemo, useState } from "react";

import AutocompleteInput from "../../components/autocomplete-input";
import SimpleDialog from "../../components/simple-dialog";

const Reschedule = ({ data, isOpen, handleClose }) => {
  const [form, setForm] = useState();
  const [doctors, setDoctors] = useState();
  const [patients, setPatients] = useState();

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
      isOpen ? doctors?.find((item) => item.id === data?.idMedico).nome : "",
    [doctors, data, isOpen]
  );

  const defaultPatient = useMemo(
    () =>
      isOpen ? patients?.find((item) => item.id === data?.idPaciente).nome : "",
    [doctors, data, isOpen]
  );

  return isOpen && data ? (
    <SimpleDialog
      title="Reagendar consulta"
      open={isOpen}
      handleClose={handleClose}
      maxWidth="xs"
    >
      <form>
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
            onChange={(_, value) => setForm({ ...form, idPaciente: value.id })}
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
                dataHoraAgendamento: event.target.value,
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
  ) : null;
};

export default Reschedule;
