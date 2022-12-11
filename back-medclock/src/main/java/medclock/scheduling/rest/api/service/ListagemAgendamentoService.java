package medclock.scheduling.rest.api.service;

import medclock.scheduling.rest.api.dto.AgendamentosEspecificosDto;
import medclock.scheduling.rest.api.repository.ListagemAgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListagemAgendamentoService {

    @Autowired
    private ListagemAgendamentoRepository listagemAgendamentoRepository;

    public List<AgendamentosEspecificosDto> todosResgistrosEspecificados() {
        return listagemAgendamentoRepository.findByListaEspecifica();
    }
}
