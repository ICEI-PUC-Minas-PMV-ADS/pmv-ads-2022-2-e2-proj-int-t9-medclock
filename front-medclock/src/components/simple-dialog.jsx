import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";

import { CancelOutlined } from "@mui/icons-material";

const SimpleDialog = (props) => {
  const {
    handleClose,
    open,
    title,
    textContent,
    children,
    maxWidth = "md",
  } = props;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={maxWidth}>
      <DialogTitle>
        {
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {title}{" "}
            <IconButton onClick={handleClose}>
              <CancelOutlined />
            </IconButton>
          </Box>
        }
      </DialogTitle>
      <DialogContent>
        {textContent ? (
          <DialogContentText>{textContent}</DialogContentText>
        ) : null}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
