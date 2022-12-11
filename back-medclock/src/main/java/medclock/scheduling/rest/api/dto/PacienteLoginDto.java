package medclock.scheduling.rest.api.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

public class PacienteLoginDto {

    @NotEmpty
    @NotBlank
    public String login;

    @NotEmpty
    @NotBlank
    public String senha;

    public PacienteLoginDto() {
        super();
    }

    public PacienteLoginDto(String login, String senha) {
        super();
        this.login = login;
        this.senha = senha;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
