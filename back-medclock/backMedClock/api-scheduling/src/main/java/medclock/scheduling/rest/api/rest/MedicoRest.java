package medclock.scheduling.rest.api.rest;

import medclock.scheduling.rest.api.dto.MedicoDto;
import medclock.scheduling.rest.api.service.MedicoService;
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
public class MedicoRest {

    @Autowired
    private MedicoService medicoService;

    @GetMapping(path = "api/medico")
    public ResponseEntity<?> todosResgistros(){
        return ResponseEntity.ok(medicoService.todosResgistros());
    }

    @GetMapping(path = "api/medico/{medicoId}")
    public ResponseEntity<?> consultar(@PathVariable Integer medicoId){
        return ResponseEntity.ok(medicoService.consultar(medicoId));
    }

    @PostMapping(path = "api/medico")
    public ResponseEntity<?> salvar(@RequestBody @Valid MedicoDto medicoDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(medicoService.salvar(medicoDto));
    }

    @PutMapping(path = "api/medico/{medicoId}")
    public ResponseEntity<?> atualizar(@PathVariable Integer medicoId, @RequestBody @Valid MedicoDto medicoDto){
        return ResponseEntity.ok(medicoService.atualizar(medicoId, medicoDto));
    }

    @DeleteMapping(path = "api/medico/{medicoId}")
    public ResponseEntity<?> deletar(@PathVariable Integer medicoId){
        medicoService.deletar(medicoId);
        return ResponseEntity.status(HttpStatus.OK).body("Medico com id " + medicoId + " foi deletado com sucesso!");
    }
}
