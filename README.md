# Semana OmniStack 9.0

## Aula 1 - Conhecendo a OmniStack e Ambiente de Desenvolvimento

Nessa aula você vai descobrir as principais ferramentas do ecossistema e o que nós vamos construir com elas

### Instalar chocolatey

Instalar [Chocolatey](https://chocolatey.org/install) no Windows e testar:

    choco -v

    0.10.15

### Instalar Node LTS

Instalar o [Node.js](https://nodejs.org/en/download/package-manager/) e testar:

    choco install nodejs-lts

Testar instalações:

    node -v

    v10.16.3

    npm -v

    6.9.0

### Instalar Yarn

Instalar [Yarn](https://yarnpkg.com/en/docs/install) e testar:

    choco install yarn

    yarn --version

    1.19.0

### Editor VS Code

Editor [VS Code](https://code.visualstudio.com/)

Tema [Dracula Oficial](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

Icones [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Extensões:
- [Rocketseat ReactJS](https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactJS)
- [Rocketseat React Native](https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactNative)

Fonte [Fira Code](https://github.com/tonsky/FiraCode)

    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,

## Aula 2 - Criando a base da aplicação - API Rest

Nessa aula você vai construir o back-end da sua aplicação: uma API robusta utilizando NodeJS

    mkdir backend

    cd backend

    yarn init -y

    code .

    yarn add express

    mkdir src

