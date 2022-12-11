package medclock.scheduling.rest.api.repository;

import medclock.scheduling.rest.api.dto.AgendamentosEspecificosDto;
import medclock.scheduling.rest.api.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListagemAgendamentoRepository extends JpaRepository<Agendamento, Long> {

    @Query(value = "SELECT new medclock.scheduling.rest.api.dto.AgendamentosEspecificosDto(m.nome, p.nome, a.dataHoraAgendamento) FROM Agendamento a INNER JOIN a.paciente p INNER JOIN a.medico m")
    List<AgendamentosEspecificosDto> findByListaEspecifica();

}
