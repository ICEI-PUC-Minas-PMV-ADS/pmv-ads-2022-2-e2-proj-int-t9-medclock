package medclock.scheduling.rest.api.repository;

import medclock.scheduling.rest.api.model.Agendamento;
import org.springframework.data.repository.CrudRepository;

public interface AgendamentoRepository extends CrudRepository<Agendamento, Integer> {}
