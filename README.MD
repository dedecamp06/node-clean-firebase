
## Pré-requisitos
- Node(v20)
- Firebase Toll (Functions/Firestone)
- NPM


## Instalação Local (RECOMENDADA)

- Faça a configuração local do seu firebase (firebase login).

- Após a configuração, clone o projeto no directorio que foi feita a configuração.

- No terminal, navegue até a pasta functions, dentro de functions execute: 
```bash
  npm install
```

- Após a instalação das bibliotecas, execute o comando:
```bash
  npm run start:dev
```
Esse Comando vai buildar o projeto e executar o comando de start do Firebase.

- Ou execute o comando de build e depois o comando de start do firebase:
```bash
  npm run build 

  firebase emulators:start
```

## Testes

- Execute o comando de testes dentro da pasta function:
```bash
npm run test
```


## Instalação com Docker

- No terminal, navegue até a dentro da pasta functions do projeto e execute: 
```bash
  docker compose build
```

- Depois de buildar o projeto, execute o docker:

```bash
  docker compose up
  ```

  - Acesse o projeto através da URL http://localhost:3333/api
- A Documentação de rotas está em http://localhost:3333/api-docs



