package medclock.scheduling.rest.api.service;

import medclock.scheduling.rest.api.dto.PacienteDto;
import medclock.scheduling.rest.api.model.Paciente;
import medclock.scheduling.rest.api.repository.PacienteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository pacienteRepository;

    public List<Paciente> todosOsRegistros() {
        return (List<Paciente>) pacienteRepository.findAll();
    }

    public Paciente consultar(Integer pacienteId) {
        return pacienteRepository.findById(pacienteId)
                .map(resultado -> ResponseEntity.ok().body(resultado))
                .orElse(ResponseEntity.notFound().build()).getBody();
    }

    @Transactional
    public Paciente salvar(PacienteDto pacienteDto) {
        Paciente paciente = new Paciente();
        BeanUtils.copyProperties(pacienteDto, paciente);
        paciente.setDataDeNascimento(Timestamp.valueOf(pacienteDto.getDataDeNascimento().toString()));
        paciente.setDt_criacao(Timestamp.valueOf(LocalDateTime.now()));
        return pacienteRepository.save(paciente);
    }

    public Paciente atualizar(Integer pacienteId, PacienteDto pacienteDto) {
        Paciente pacienteNovo = new Paciente();
        BeanUtils.copyProperties(pacienteDto, pacienteNovo);
        Paciente pacienteAntigo = pacienteRepository.findById(pacienteId).get();
        pacienteNovo.setId(pacienteAntigo.getId());
        pacienteNovo.setDt_criacao(pacienteAntigo.getDt_criacao());
        return pacienteRepository.save(pacienteNovo);
    }

    @Transactional
    public void deletar(Integer pacienteId) {
        pacienteRepository.delete(pacienteRepository.findById(pacienteId).get());
    }
}
