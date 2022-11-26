import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const AutocompleteInput = (props) => {
  const { options, label, required = false, onChange, defaultValue } = props;
  return (
    <Autocomplete
      fullWidth
      disablePortal
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      renderInput={(params) => (
        <TextField {...params} label={label} required={required} />
      )}
    />
  );
};

export default AutocompleteInput;
