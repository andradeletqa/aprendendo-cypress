# aprendendo-cypress
Projeto criado para ministrar minicursos de testes automatizados com cypress.

Para realizar a configuração e executar os testes automatizados, siga os seguintes passos:

##### Baixando o Node.js

Instale o Node.js em sua máquina, clicando no link abaixo:

[Baixar Node.js](https://nodejs.org/en/).


Para confirmar que a instalação obteve êxito, abra o seu terminal e digite:

        - node --version

##### Baixando a IDE

A IDE será o ambiente que iremos trabalhar e realizar a escrita dos scripts de teste automatizados.
Utilize uma IDE de sua preferência. Recomendamos o VsCode por ser uma ferramenta bastante completa.

[Baixar IDE](https://code.visualstudio.com/download)


##### Clonando o projeto e abrindo na IDE

    git clone <link-do-projeto-no-gitlab>

Após clonar o projeto, abra-o na IDE e vamos realizar as configurações das dependências,

    npm install

Para executar o testes digite:

    npm run test

##### Padrão de criação de branch

Para cada analista automatizador, deve existir uma branch criada a partir da main, para criar sua branch siga os passos:

Caso não esteja, vá para a main,
    - git checkout main

Criando sua branch:
    - git checkout -b feature/leticia.andrade

##### Padrão de commit do código

Verifica suas modificações antes de realizar o commit.
    - git status

Adiciona sua modificações
    - git add .

Realiza na branch o commit
    - git commit -m "[nome-da-funcionalidade] - descricao das atualizações que você fez no código."
