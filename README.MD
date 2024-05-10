
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

## Arquitetura

A arquitetura do projeto é baseada no Clean Architecture, que propõe a separação das camadas para criar uma aplicação escalável e de fácil manutenção. O design visa permitir o crescimento horizontal da arquitetura de forma estruturada, atribuindo responsabilidades específicas a cada camada.

- Camada Main: Esta camada é responsável pela entrada e saída de dados. No nosso caso, utilizamos o Firebase como controlador, tratando das interações de alto nível com os usuários e sistemas externos.

- Camada de Domínio: Situada no topo da arquitetura, essa camada é central e independente de outras camadas. Ela contém as regras de negócio essenciais e os modelos de domínio que definem o núcleo funcional da aplicação.

- Camada de Infraestrutura: Responsável por gerenciar todos os recursos externos do projeto, esta camada assegura que alterações em tecnologias ou plataformas externas não impactem as demais camadas. Isso facilita a manutenção e a evolução tecnológica do sistema sem grandes transtornos.

- Camada de Apresentação: Aqui reside toda a lógica de apresentação e interação do usuário, organizada em Use Cases. Esta camada coordena o fluxo de dados para e da camada de Domínio, e transforma os dados para a exibição adequada ao usuário.

Este design não apenas clarifica a separação de responsabilidades dentro do projeto, mas também suporta uma manutenção eficaz e a fácil adaptação a mudanças tanto em requisitos de negócios quanto em tecnologias de suporte.


