import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/agendamentos");
    setForm(null);
  };

  return (
    <Paper elevation={4} sx={{ padding: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height={450}
      >
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nome"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Sobrenome"
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default SignUp;
