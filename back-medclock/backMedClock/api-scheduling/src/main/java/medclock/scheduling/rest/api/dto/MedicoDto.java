package medclock.scheduling.rest.api.dto;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.sql.Timestamp;

public class MedicoDto {

    @NotBlank
    @NotEmpty
    public String nome;

    @NotBlank
    @NotEmpty
    public String cpf;

    @JsonFormat(pattern = "dd/MM/yyyy")
    public Timestamp dataDeNascimento;

    @NotBlank
    @NotEmpty
    public String telefone;

    @NotBlank
    @NotEmpty
    public String endereco;

    @NotBlank
    @NotEmpty
    public String email;

    @NotBlank
    @NotEmpty
    public String especialidade;

    @NotBlank
    @NotEmpty
    public String login;

    @NotBlank
    @NotEmpty
    public String senha;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Timestamp getDataDeNascimento() {
        return dataDeNascimento;
    }

    public void setDataDeNascimento(Timestamp dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
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
