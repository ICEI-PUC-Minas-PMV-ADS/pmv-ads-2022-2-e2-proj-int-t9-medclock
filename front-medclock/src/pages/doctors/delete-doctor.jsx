import { Box, Button } from "@mui/material";
import { useState } from "react";
import Notification from "../../components/notification";

import SimpleDialog from "../../components/simple-dialog";

const DeleteDoctor = ({ data, isOpen, handleClose }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationType, setNotificationType] = useState();
  const [notificationMessage, setNotificationMessage] = useState();

  const toggleNotification = () => setIsNotificationOpen((state) => !state);

  const openNotification = (type, message) => {
    setIsNotificationOpen(true);
    setNotificationType(type);
    setNotificationMessage(message);
  };

  const handleClick = async () => {
    try {
      fetch(`https://testeappfaculmc.herokuapp.com/api/medico/${data.id}`, {
        method: "DELETE",
      });

      handleClose();
      openNotification("success", "Médico excluído com sucesso.");
    } catch {
      openNotification("error", "Ocorreu um erro ao excluir médico.");
    }
  };

  return (
    <>
      <SimpleDialog
        title="Excluir paciente"
        open={isOpen}
        handleClose={handleClose}
        maxWidth="xs"
      >
        Tem certeza que deseja excluir o médico?
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button onClick={handleClick}>Confirmar</Button>
        </Box>
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

export default DeleteDoctor;
