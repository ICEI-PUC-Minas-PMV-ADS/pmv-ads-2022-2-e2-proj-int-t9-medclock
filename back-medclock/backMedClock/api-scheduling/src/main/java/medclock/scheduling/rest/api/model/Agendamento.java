package medclock.scheduling.rest.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
public class Agendamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, name = "id_medico")
    private Integer idMedico;

    @Column(nullable = false, name = "id_paciente")
    private Integer idPaciente;

    @Column(nullable = false, name = "data_hora_agendamento")
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private Timestamp dataHoraAgendamento;

    @Column(nullable = false, name = "dt_criacao")
    public Timestamp dt_criacao;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdMedico() {
        return idMedico;
    }

    public void setIdMedico(Integer idMedico) {
        this.idMedico = idMedico;
    }

    public Integer getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Integer idPaciente) {
        this.idPaciente = idPaciente;
    }

    public Timestamp getDataHoraAgendamento() {
        return dataHoraAgendamento;
    }

    public void setDataHoraAgendamento(Timestamp dataHoraAgendamento) {
        this.dataHoraAgendamento = dataHoraAgendamento;
    }

    public Timestamp getDt_criacao() {
        return dt_criacao;
    }

    public void setDt_criacao(Timestamp dt_criacao) {
        this.dt_criacao = dt_criacao;
    }
}
