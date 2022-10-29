package medclock.scheduling.rest.api.rest;

import medclock.scheduling.rest.api.dto.PacienteDto;
import medclock.scheduling.rest.api.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class PacienteRest{

    @Autowired
    private PacienteService pacienteService;

    @GetMapping(path = "/api/paciente")
    public ResponseEntity<?> todosRegistros(){
        return ResponseEntity.ok(pacienteService.todosOsRegistros());
    }

    @GetMapping(path = "/api/paciente/{pacienteId}")
    public ResponseEntity<?> consultar(@PathVariable Integer pacienteId){
        return ResponseEntity.ok(pacienteService.consultar(pacienteId));
    }

    @PostMapping(path = "/api/paciente")
    public ResponseEntity<?> salvar(@RequestBody @Valid PacienteDto pacienteDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(pacienteService.salvar(pacienteDto));
    }

    @PutMapping(path = "/api/paciente/{pacienteId}")
    public ResponseEntity<?> atualizar(@PathVariable Integer pacienteId, @RequestBody @Valid PacienteDto pacienteDto){
        return ResponseEntity.ok(pacienteService.atualizar(pacienteId, pacienteDto));
    }

    @DeleteMapping(path = "/api/paciente/{pacienteId}")
    public ResponseEntity<?> deletar(@PathVariable Integer pacienteId){
        pacienteService.deletar(pacienteId);
        return ResponseEntity.status(HttpStatus.OK).body("Paciente com id " + pacienteId + " foi deletado com sucesso!");
    }
}
