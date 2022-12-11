package medclock.scheduling.rest.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "medico")
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    public String nome;

    @Column(nullable = false, length = 20)
    public String cpf;

    @Column(nullable = false, name = "data_de_nascimento")
    @JsonFormat(pattern = "dd/MM/yyyy")
    public Timestamp dataDeNascimento;

    @Column(nullable = false, length = 20)
    public String telefone;

    @Column(nullable = false, length = 100)
    public String endereco;

    @Column(nullable = false, length = 100)
    public String email;

    @Column(nullable = false, length = 100)
    public String especialidade;

    @Column(nullable = false, length = 20)
    public String login;

    @Column(nullable = false, length = 20)
    public String senha;

    @Column(nullable = false, name = "dt_criacao")
    public Timestamp dt_criacao;

    public Medico() {
        super();
    }

    public Medico(Integer id) {
        super();
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public Timestamp getDt_criacao() {
        return dt_criacao;
    }

    public void setDt_criacao(Timestamp dt_criacao) {
        this.dt_criacao = dt_criacao;
    }
}
