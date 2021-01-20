# Teste Sami

## :rocket: Descrição do teste

O teste consiste em desenvolver uma API Rest de listagem de beneficiários,
com alguns dados básicos:

Nome, CPF, RG, Data de Nascimento, Tipo de Plano (pode ser Basic, Standard
ou Premium) e Número de dependentes (este campo pode ser vazio ou não).

### Requisitos:
- Criar novos registros;
- Ler registros existentes;
- Alterar registros existentes;
- Deletar registros existentes.

## :scroll: Documentação

### Tecnologias utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [mongoose](https://mongoosejs.com/) 
- [typescript](https://www.typescriptlang.org/) 
- [jest](https://jestjs.io/) 
- [babel](https://babeljs.io/) 
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [tsyringe](https://github.com/microsoft/tsyringe)


### Estrutura de pastas

``` 
src                      # Onde fica todo código da aplicação
├── container            # Configuração responsável pela injeção de dependência
├── controllers          # Onde ficam os controllers da aplicação
├── dtos                 # Onde estão algumas interfaces
├── middlewares          # Onde ficam os middlewares
├── models               # Arquivo de modelos da base de dados usado
├── repositories         # Camada de abstração da persistência no banco
├── services             # Classes que fazem interação com os repositórios
├── tests                # Onde estão todos os testes
├─ app.ts                # Início da aplicação
├─ routes.ts             # Arquivo que contém todas as rotas
├─ server.ts             # Arquivo que inicia o servidor da aplicação
```

### Instruções para rodar a API

```
# Pré requisitos para rodar a aplicação
# Ter o Docker e docker-compose configurado na maquina.

# Clonando o repositório
$ git clone https://github.com/gdlopes/sami-challenge.git

# Navegando para a pasta do projeto
$ cd sami-challenge

# Instalando as dependências
$ yarn

# Build do docker
$ docker-compose build

# Subindo o docker
$ docker-compose up

# Para rodar os testes basta
$ yarn test
```

### Testes são importantes :heart:
![image](https://user-images.githubusercontent.com/39420270/104984807-3b7bf500-59ee-11eb-8d69-95b0cfe595b4.png)


### Sobre as rotas criadas

POST http://localhost:3333/recipients - rota para criar um novo beneficiário.

GET http://localhost:3333/recipients - rota para buscar todos os beneficiários.

PUT http://localhost:3333/recipients/:id - rota para alterar um beneficiário específico.

DELETE http://localhost:3333/recipients/:id - rota para deletar um beneficiário específico.

### Testando API localmente

Utilize as rotas citadas acima com seus devidos métodos HTTP para ver tudo fundionando, pode utilizar o [postman](https://www.postman.com/) ou qualquer aplicativo equivalente.

Caso esteja acostumado com o [Insomnia](https://insomnia.rest/) e o tenha instalado, pode importar o projeto através deste botão que deixei pronto com as rotas da aplicação :point_down:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=sami-challenge&uri=https%3A%2F%2Fgithub.com%2Fgdlopes%2Fsami-challenge%2Fblob%2Fmain%2FInsomnia_2021-01-19.json)


### Thats it folks :clap:
Get a :coffee: and keep learning :books: ! 

---

by Gustavo Lopes :tada:
