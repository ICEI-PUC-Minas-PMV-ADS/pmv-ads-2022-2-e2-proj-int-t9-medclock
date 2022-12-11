package medclock.scheduling.rest.api.service;

import medclock.scheduling.rest.api.dto.PacienteLoginDto;
import medclock.scheduling.rest.api.model.Paciente;
import medclock.scheduling.rest.api.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private PacienteRepository pacienteRepository;


    public Paciente loginIn(PacienteLoginDto pacienteLoginDto) {

        Paciente pacienteLogado = pacienteRepository.findByLogin(pacienteLoginDto.getLogin());

        if(pacienteLogado != null){
            return pacienteLogado;
        } else {
            return null;
        }
    }
}
