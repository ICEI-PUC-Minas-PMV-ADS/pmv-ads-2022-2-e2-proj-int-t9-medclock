import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import AutocompleteInput from "../../components/autocomplete-input";
import SimpleDialog from "../../components/simple-dialog";

const ScheduleRegister = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleCloseDialog = () => setIsDialogOpen((state) => !state);

  return (
    <>
      <Button variant="contained" onClick={toggleCloseDialog}>
        Nova consulta
      </Button>
      <SimpleDialog
        open={isDialogOpen}
        handleClose={toggleCloseDialog}
        title="Agendar nova consulta"
        onConfirmTitle="Confirmar"
        maxWidth="xs"
      >
        <form>
          <Box display="flex" flexDirection="column" gap={2} my={2}>
            <AutocompleteInput
              label="Médico"
              options={[{ id: 1, label: "Amanda" }]}
            />
            <AutocompleteInput
              label="Paciente"
              options={[{ id: 1, label: "Amanda" }]}
            />
            <TextField label="Data" type="datetime-local" fullWidth />
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit">Confirmar</Button>
            </Box>
          </Box>
        </form>
      </SimpleDialog>
    </>
  );
};

export default ScheduleRegister;
