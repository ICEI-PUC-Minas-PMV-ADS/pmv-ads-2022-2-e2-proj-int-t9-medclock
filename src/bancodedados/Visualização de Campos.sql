--  ver todos os pacientes
select * from paciente;

--  ver todos os medicos
select * from medico;
 
--  ver todos os agendamentos
select * from agendamentos;


--  ver todos os agendamentos filtrando por id
select * from agendamentos a where id_medico = 1;

--  ver todos os agendamentos de forma detalhada, com nome de medico e paciente atrelados ao medico, filtando pelo nome
select m.nome, p.nome, a.data_hora_atendimento from agendamentos a
INNER JOIN paciente p ON p.id = a.id_paciente 
INNER JOIN medico m ON m.id = a.id_medico;