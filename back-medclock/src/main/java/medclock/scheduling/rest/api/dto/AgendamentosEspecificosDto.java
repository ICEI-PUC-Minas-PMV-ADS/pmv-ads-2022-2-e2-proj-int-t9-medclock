package medclock.scheduling.rest.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.sql.Timestamp;
import java.util.Date;

public class AgendamentosEspecificosDto {

    @NotBlank
    @NotEmpty
    public String nomeMedico;

    @NotBlank
    @NotEmpty
    public String nomePaciente;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private Timestamp dataHoraAgendamento;

    public AgendamentosEspecificosDto() {
        super();
    }

    public AgendamentosEspecificosDto(String nomeMedico, String nomePaciente, Date dataHoraAgendamento) {
        super();
        this.nomeMedico = nomeMedico;
        this.nomePaciente = nomePaciente;
        this.dataHoraAgendamento = new Timestamp(dataHoraAgendamento.getTime()) ;
    }

    public String getNomeMedico() {
        return nomeMedico;
    }

    public void setNomeMedico(String nomeMedico) {
        this.nomeMedico = nomeMedico;
    }

    public String getNomePaciente() {
        return nomePaciente;
    }

    public void setNomePaciente(String nomePaciente) {
        this.nomePaciente = nomePaciente;
    }

    public Timestamp getDataHoraAgendamento() {
        return dataHoraAgendamento;
    }

    public void setDataHoraAgendamento(Timestamp dataHoraAgendamento) {
        this.dataHoraAgendamento = dataHoraAgendamento;
    }
}
