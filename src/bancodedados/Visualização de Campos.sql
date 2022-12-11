--  ver todos os pacientes
SELECT * FROM paciente;

--  ver todos os medicos
SELECT * FROM medico;
 
--  ver todos os agendamentos
SELECT * FROM agendamento;


--  ver todos os agendamentos filtrando por id
SELECT * FROM agendamento a where id_medico = 1;

--  ver todos os agendamentos de forma detalhada, com nome de medico e paciente atrelados ao medico, filtando pelo nome
SELECT m.nome, p.nome, a.data_hora_agendamento FROM agendamento a
INNER JOIN paciente p ON p.id = a.id_paciente 
INNER JOIN medico m ON m.id = a.id_medico;