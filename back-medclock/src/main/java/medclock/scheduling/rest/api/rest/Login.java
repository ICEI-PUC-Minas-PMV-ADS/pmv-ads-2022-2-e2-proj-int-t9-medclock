package medclock.scheduling.rest.api.rest;

import medclock.scheduling.rest.api.dto.PacienteLoginDto;
import medclock.scheduling.rest.api.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class Login {

    @Autowired
    private LoginService loginService;

    @GetMapping(path = "/api/login")
    public ResponseEntity<?> consultar(@RequestBody @Valid PacienteLoginDto pacienteLoginDto){
        return ResponseEntity.ok(loginService.loginIn(pacienteLoginDto));
    }
}
