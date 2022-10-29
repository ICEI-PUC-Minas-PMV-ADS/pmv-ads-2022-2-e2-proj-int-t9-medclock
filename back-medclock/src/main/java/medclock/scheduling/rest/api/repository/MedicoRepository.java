package medclock.scheduling.rest.api.repository;

import medclock.scheduling.rest.api.model.Medico;
import org.springframework.data.repository.CrudRepository;

public interface MedicoRepository extends CrudRepository<Medico, Integer> {}
