package medclock.scheduling.rest.api.service;

import medclock.scheduling.rest.api.dto.MedicoDto;
import medclock.scheduling.rest.api.model.Medico;
import medclock.scheduling.rest.api.repository.MedicoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class MedicoService {

    @Autowired
    private MedicoRepository medicoRepository;

    public List<Medico> todosResgistros(){
        return (List<Medico>) medicoRepository.findAll();
    }

    public Medico consultar(Integer medicoId) {
        return medicoRepository.findById(medicoId)
                .map(resultado -> ResponseEntity.ok().body(resultado))
                .orElse(ResponseEntity.notFound().build()).getBody();
    }

    @Transactional
    public Medico salvar(MedicoDto medicoDto) {
        Medico medico = new Medico();
        BeanUtils.copyProperties(medicoDto, medico);
        medico.setDataDeNascimento(Timestamp.valueOf(medicoDto.getDataDeNascimento().toString()));
        medico.setDt_criacao(Timestamp.valueOf(LocalDateTime.now()));
        return medicoRepository.save(medico);
    }

    @Transactional
    public Medico atualizar(Integer medicoId, MedicoDto medicoDto) {
        Medico medicoNovo = new Medico();
        BeanUtils.copyProperties(medicoDto, medicoNovo);
        Medico medicoAntigo = medicoRepository.findById(medicoId).get();
        medicoNovo.setId(medicoAntigo.getId());
        medicoNovo.setDt_criacao(medicoAntigo.getDt_criacao());
        return medicoRepository.save(medicoNovo);
    }

    @Transactional
    public void deletar(Integer medicoId) {
        medicoRepository.delete(medicoRepository.findById(medicoId).get());
    }
}
