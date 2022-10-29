package medclock.scheduling.rest.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.sql.Timestamp;

public class AgendamentoDto {

    private Integer idMedico;

    private Integer idPaciente;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private Timestamp dataHoraAgendamento;

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
}
