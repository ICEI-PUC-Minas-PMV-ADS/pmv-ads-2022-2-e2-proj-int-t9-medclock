package medclock.scheduling.rest.api.service;

import medclock.scheduling.rest.api.dto.AgendamentoDto;
import medclock.scheduling.rest.api.model.Agendamento;
import medclock.scheduling.rest.api.repository.AgendamentoRepository;
import medclock.scheduling.rest.api.repository.MedicoRepository;
import medclock.scheduling.rest.api.repository.PacienteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AgendamentoService {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private MedicoRepository medicoRepository;

    @Autowired
    private PacienteRepository pacienteRepository;

    public List<Agendamento> todosResgistros() {
        return (List<Agendamento>) agendamentoRepository.findAll();
    }

    public Agendamento consultar(Integer agendamentoId) {
        return agendamentoRepository.findById(agendamentoId)
                .map(resultado -> ResponseEntity.ok().body(resultado))
                .orElse(ResponseEntity.notFound().build()).getBody();
    }

    public Agendamento salvar(AgendamentoDto agendamentoDto) {
        Agendamento agendamento = new Agendamento();
        BeanUtils.copyProperties(agendamentoDto, agendamento);
        agendamento.setDt_criacao(Timestamp.valueOf(LocalDateTime.now()));
        agendamento.setMedico(medicoRepository.findById(agendamentoDto.getIdMedico()).orElseThrow(()->new RuntimeException("Medico não existente")));
        agendamento.setPaciente(pacienteRepository.findById(agendamentoDto.getIdPaciente()).orElseThrow(()->new RuntimeException("Paciente não existente")));
        return agendamentoRepository.save(agendamento);
    }

    public Agendamento atualizar(Integer agendamentoId, AgendamentoDto agendamentoDto) {
        Agendamento agendamentoNovo = new Agendamento();
        BeanUtils.copyProperties(agendamentoDto, agendamentoNovo);
        Agendamento agendamentoAntigo = agendamentoRepository.findById(agendamentoId).get();
        agendamentoNovo.setId(agendamentoAntigo.getId());
        agendamentoNovo.setDt_criacao(agendamentoAntigo.getDt_criacao());
        agendamentoNovo.setMedico(medicoRepository.findById(agendamentoDto.getIdMedico()).orElseThrow(()->new RuntimeException("Medico não existente")));
        agendamentoNovo.setPaciente(pacienteRepository.findById(agendamentoDto.getIdPaciente()).orElseThrow(()->new RuntimeException("Paciente não existente")));
        return agendamentoRepository.save(agendamentoNovo);
    }

    public void deletar(Integer agendamentoId) {
        agendamentoRepository.delete(agendamentoRepository.findById(agendamentoId).get());
    }
}
