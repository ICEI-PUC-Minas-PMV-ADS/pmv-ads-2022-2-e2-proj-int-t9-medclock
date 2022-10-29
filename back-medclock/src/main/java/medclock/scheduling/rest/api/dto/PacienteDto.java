package medclock.scheduling.rest.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.sql.Timestamp;

public class PacienteDto {

    @NotEmpty
    @NotBlank
    public String nome;

    @NotEmpty
    @NotBlank
    public String cpf;

    @JsonFormat(pattern = "dd/MM/yyyy")
    public Timestamp dataDeNascimento;

    @NotEmpty
    @NotBlank
    public String telefone;

    @NotEmpty
    @NotBlank
    public String endereco;

    @NotEmpty
    @NotBlank
    public String email;

    @NotEmpty
    @NotBlank
    public String alergia;

    public Integer flagMaiorIdade;

    @NotEmpty
    @NotBlank
    public String responsavel;

    @NotEmpty
    @NotBlank
    public String login;

    @NotEmpty
    @NotBlank
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

    public String getAlergia() {
        return alergia;
    }

    public void setAlergia(String alergia) {
        this.alergia = alergia;
    }

    public Integer getFlagMaiorIdade() {
        return flagMaiorIdade;
    }

    public void setFlagMaiorIdade(Integer flagMaiorIdade) {
        this.flagMaiorIdade = flagMaiorIdade;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
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
