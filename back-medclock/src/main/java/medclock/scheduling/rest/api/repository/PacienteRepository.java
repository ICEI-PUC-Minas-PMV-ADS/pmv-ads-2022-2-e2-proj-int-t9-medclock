package medclock.scheduling.rest.api.repository;

import medclock.scheduling.rest.api.model.Paciente;
import org.springframework.data.repository.CrudRepository;

public interface PacienteRepository extends CrudRepository<Paciente, Integer> {
    Paciente findByLogin(String login);
}
