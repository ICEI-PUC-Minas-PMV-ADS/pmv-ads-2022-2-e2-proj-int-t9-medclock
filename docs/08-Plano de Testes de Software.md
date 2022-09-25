# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Não deixe de enumerar os casos de teste de forma sequencial e de garantir que o(s) requisito(s) associado(s) a cada um deles está(ão) correto(s) - de acordo com o que foi definido na seção "2 - Especificação do Projeto". 

Por exemplo:
 
| **Caso de Teste** 	| **CT-01 – Cadastrar cliente** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro dos clientes para que esses consigam criar e gerenciar seu perfil. |
| Objetivo do Teste 	| Verificar se o cliente consegue se cadastrar na aplicação. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://medclock.com.br<br> - Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-02	- A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail ou o telefone do usuário. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://medclock.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de login com o e-mail ou o número de telefone <br> - Preencher o campo da senha <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Visualizar Agenda Médica da Clínica pelo Paciente**	|
|Requisito Associado | RF-03	- A aplicação deve possuir opção para que o cliente visualize a agenda médica antes de realizar a marcação de consulta. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar a agenda médica. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://medclock.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de login com o e-mail ou o número de telefone <br> - Preencher o campo da senha <br> - Clicar em "Login" - Pesquisar a clínica alvo - Clicar no perfil da Clínica - Clicar em Visualizar Agenda | 
|Critério de Êxito | - Agenda da Clínica aberta para visualização. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Marcação de Consultas pelo Paciente**	|
|Requisito Associado | RF-04	- A aplicação deve possuir opção para que o cliente marque o agendamento de consulta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar o agendamento de consulta. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://medclock.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de login com o e-mail ou o número de telefone <br> - Preencher o campo da senha <br> - Clicar em "Login" - Pesquisar a clínica alvo - Clicar no perfil da Clínica - Clicar em Marcação de Consulta - Selecionar a dada e hora que deseja agendar - Clicar em "Agendar" |
|Critério de Êxito | - O agendamento foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Remarcação de Consultas pelo Paciente**	|
|Requisito Associado | RF-05	- A aplicação deve possuir opção para que o cliente remarque a consulta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://medclock.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de login com o e-mail ou o número de telefone <br> - Preencher o campo da senha <br> - Clicar em "Login" - Clicar em Consultas Agendadas - Clicar em Editar - Escolher nova data e hora - Clicar em Ägendar" |
|Critério de Êxito | - O reagendamento foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Dermacação de Consultas pelo Paciente**	|
|Requisito Associado | RF-06	- A aplicação deve possuir opção para que o cliente desmarque a consulta. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://medclock.com.br<br> - Clicar no botão "Entrar" <br> - Preencher o campo de login com o e-mail ou o número de telefone <br> - Preencher o campo da senha <br> - Clicar em "Login" - Clicar em Consultas Agendadas - Clicar em Desmarcar  |
|Critério de Êxito | - A desmarcação de consulta foi realizada com sucesso. |





