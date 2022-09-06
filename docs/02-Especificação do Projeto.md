# Especificações do Projeto

## Personas (FALTA PREENCHER)

## Histórias de Usuários (FALTA PREENCHER)

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                |
| -------------------- | ---------------------------------- | -------------------------------------- |
| Usuário do sistema   | Registrar minhas tarefas           | Não esquecer de fazê-las               |
| Administrador        | Alterar permissões                 | Permitir que possam administrar contas |

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

