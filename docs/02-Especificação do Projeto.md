# Especificações do Projeto

## Personas

Luana Alves - 21 anos

- Assistente produção
- Ela tem diversas crises de ansiedade e vinha fazendo tratando com psicólogos, depois da pandemia, não consegue sair de casa, mesmo agora, então interrompeu seus tratamentos, se sente cada vez pior e procura ajuda em atendimentos em plataformas online.

Pedro Carvalho - 23 anos

- Trabalha como entregador em aplicativos de comida.
- Ele acaba que, por falta de tempo, fazer agendamentos presenciais. Depois que começou a usar métodos de agendamento medico online, não consegue fazê-lo de outra forma, muito mais prático, em sua opinião. 

Jonathan Costa - 26 anos

- Programador
- Ele trabalha para uma clínica médica que utiliza serviços de agendamentos online e por trabalhar na área pode experimentar dos seus benefícios.

Fabiola Ferreira - 48 anos

- Médica e dona da clinica Saúde em Vida
- Ela representa o público de profissionais de saúde que busca, expandir o alcance de seu trabalho, ela usaria a plataforma para aprimorar seus serviços.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| `PERSONA`         | `FUNCIONALIDADE`                                                                    | `MOTIVO/VALOR`                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Luana Alves       | Ter um local de confiança para prosseguir com meu tratamento | Poder ter a praticidade, conforto e a segurança mediante a qualquer situação. |
| Pedro Carvalho    | Cuidar da saúde de forma mais pratica mediante a sua rotina                         | Ter acesso a saúde em qualquer situação.                     |
| Jonathan Costa    | Continuar com a praticidade e a qualidade de vida em ter saúde de forma mais acessível                                | Promover a saúde tanto em utilização quanto em produção em seu próprio oficio                                                                 |
| Fabiola Ferreira  | Ter acesso a pessoas de forma mais fácil e segura para ambos os lados                               | Oferecer saúde de qualidade de forma confortável com que todos tenham acesso a saúde independente da situação que se encontra          |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                            | Prioridade |
| ------ | ----------------------------------------------------------------- | ---------- |
| RF-001 | Permitir que o paciente se cadastre na plataforma da clínica      | ALTA       |
| RF-002 | Permitir que o paciente faça login na plataforma da clínica       | ALTA       |
| RF-003 | Permitir que o paciente visualize a agenda médica da clínica      | ALTA       |
| RF-004 | Permitir que o paciente marque consultas através da plataforma    | ALTA       |
| RF-005 | Permitir que o paciente remarque consultas através da plataforma  | ALTA       |
| RF-006 | Permitir que o paciente desmarque consultas através da plataforma | ALTA       |
| RF-007 | Permitir o paciente edite suas informações no sistema             | MÉDIA      |
| RF-008 | Permitir que a clínica visualize a agenda médica                  | MÉDIA      |
| RF-009 | Permitir que a clínica marque consultas para pacientes            | MÉDIA      |
| RF-010 | Permitir que a clínica remarque consultas para pacientes          | MÉDIA      |
| RF-011 | Permitir que a clínica desmarque consultas para pacientes         | MÉDIA      |
| RF-012 | Permitir que a clínica cadastre pacientes                         | MÉDIA      |
| RF-013 | Permitir que o paciente exclua sua conta                          | BAIXA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                       | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------ | ---------- |
| RNF-001 | O site deve ser publicado em um ambiente acessível publicamente na Internet Heroku                           | ALTA       |
| RNF-002 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | ALTA       |
| RNF-003 | A base de dados deve ser acessada apenas por usuários autenticados                                           | ALTA       |
| RNF-004 | O sistema deverá se comunicar com banco relacional                                                           | BAIXA      |
| RNF-005 | O tempo de resposta do sistema não deve ser maior do que 30 segundos                                         | BAIXA      |
| RNF-005 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade                            | BAIXA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |

## Diagrama de Casos de Uso

![Casos de uso clínica médica](https://user-images.githubusercontent.com/71783235/188753824-1e43696c-747f-406a-8a17-a9bdd6f475b8.jpg)

![caso de uso pro medico](https://user-images.githubusercontent.com/71783235/188758525-ed301051-3594-4125-894d-a5adc1f63267.jpg)

