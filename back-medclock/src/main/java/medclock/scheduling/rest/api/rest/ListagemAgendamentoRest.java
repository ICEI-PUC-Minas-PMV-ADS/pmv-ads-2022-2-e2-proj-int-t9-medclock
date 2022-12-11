package medclock.scheduling.rest.api.rest;

import medclock.scheduling.rest.api.service.ListagemAgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ListagemAgendamentoRest {

    @Autowired
    private ListagemAgendamentoService listagemAgendamentoService;

    @GetMapping(path = "api/agendamento/especificada")
    public ResponseEntity<?> todosResgistrosEspecificados(){
        return ResponseEntity.ok(listagemAgendamentoService.todosResgistrosEspecificados());
    }
}
