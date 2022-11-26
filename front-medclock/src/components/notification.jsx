import { Alert, Snackbar } from "@mui/material";

const Notification = (props) => {
  const { isOpen, handleClose, message, type } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ minWidth: "250px" }} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
