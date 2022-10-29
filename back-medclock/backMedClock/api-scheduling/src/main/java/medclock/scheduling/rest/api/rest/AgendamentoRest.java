package medclock.scheduling.rest.api.rest;

import medclock.scheduling.rest.api.dto.AgendamentoDto;
import medclock.scheduling.rest.api.service.AgendamentoService;
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
public class AgendamentoRest {

    @Autowired
    private AgendamentoService agendamentoService;

    @GetMapping(path = "api/agendamento")
    public ResponseEntity<?> todosResgistros(){
        return ResponseEntity.ok(agendamentoService.todosResgistros());
    }

    @GetMapping(path = "api/agendamento/{agendamentoId}")
    public ResponseEntity<?> consultar(@PathVariable Integer agendamentoId){
        return ResponseEntity.ok(agendamentoService.consultar(agendamentoId));
    }

    @PostMapping(path = "api/agendamento")
    public ResponseEntity<?> salvar(@RequestBody @Valid AgendamentoDto agendamentoDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(agendamentoService.salvar(agendamentoDto));
    }

    @PutMapping(path = "api/agendamento/{agendamentoId}")
    public ResponseEntity<?> atualizar(@PathVariable Integer agendamentoId, @RequestBody @Valid AgendamentoDto agendamentoDto){
        return ResponseEntity.ok(agendamentoService.atualizar(agendamentoId, agendamentoDto));
    }

    @DeleteMapping(path = "api/agendamento/{agendamentoId}")
    public ResponseEntity<?> deletar(@PathVariable Integer agendamentoId){
        agendamentoService.deletar(agendamentoId);
        return ResponseEntity.status(HttpStatus.OK).body("Agendamento com id " + agendamentoId + " foi deletado com sucesso!");
    }
}
