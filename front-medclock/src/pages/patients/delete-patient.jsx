import { Box, Button } from "@mui/material";

import SimpleDialog from "../../components/simple-dialog";

const DeletePatient = ({ _data, isOpen, handleClose }) => {
  return (
    <SimpleDialog
      title="Excluir paciente"
      open={isOpen}
      handleClose={handleClose}
      maxWidth="xs"
    >
      Tem certeza que deseja excluir o paciente?
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button>Confirmar</Button>
      </Box>
    </SimpleDialog>
  );
};

export default DeletePatient;
