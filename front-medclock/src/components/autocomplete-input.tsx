import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const AutocompleteInput = (props) => {
  const { options, label } = props;
  return (
    <Autocomplete
      fullWidth
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default AutocompleteInput;
