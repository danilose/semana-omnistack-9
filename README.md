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

    yarn add express

    mkdir src

    yarn add nodemon -D

    yarn dev

    yarn add mongoose

portquiz.net:27017 (site para testar portas da máquina)

    yarn add multer

## Aula 3 - Construindo a interface web

Nessa aula você vai construir o front-end da sua aplicação: uma interface web dinâmica com ReactJS

    cd ..

    yarn create react-app frontend

    cd frontend 
    
    yarn start

    yarn add axios

    cd ../backend

    yarn add cors

    cd ../frontend

    yarn add react-router-dom

## Aula 4 - Desenvolvendo o app mobile

Nessa aula você vai desenvolver o app mobile da sua aplicação para iOS e Android com React Native

    npm install expo-cli --global

    expo init mobile

Selecionar template blank e colocar o nome da aplicação

    cd mobile

    yarn start

Caso não quiser usar o [expo](https://expo.io/tools) [Rocketseat Docs](https://docs.rocketseat.dev/)

    yarn add [react-navigation](https://reactnavigation.org/docs/en/getting-started.html)

    expo install react-native-gesture-handler react-native-reanimated

    yarn add axios

## Aula 5 - Funcionalidades avançadas

Nessa aula você vai descobrir quais são os próximos passos que você precisa dar no desenvolvimento

https://github.com/Rocketseat/expo-common-issues