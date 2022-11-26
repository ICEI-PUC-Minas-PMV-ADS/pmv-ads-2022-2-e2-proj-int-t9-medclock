import { Box, Button } from "@mui/material";

import SimpleDialog from "../../components/simple-dialog";

const CancelSchedule = ({ _data, isOpen, handleClose }) => {
  return (
    <SimpleDialog
      title="Desmarcar consulta"
      open={isOpen}
      handleClose={handleClose}
      maxWidth="xs"
    >
      Tem certeza que deseja desmarcar a consulta?
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button type="submit">Confirmar</Button>
      </Box>
    </SimpleDialog>
  );
};

export default CancelSchedule;
