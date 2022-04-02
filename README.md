# Prisma IO

## 1 Primeiros passos com prisma

### O que é o prisma?

- Prisma é um projeto OpenSource e que segundo o próprio time pode ser considerado uma especie de ORM que substitui os tradicionais.
- Model como se fosse a nossa tabela
- Migrations
- Primas studio
- Data plataform

### Instalando extensão no vscode

- Prisma
- Prisma - Insider
- Vai em Preferênces > Settings e adiciona

```
"[prisma]":{
        "editor.defaultFormatter": "Prisma.prisma"
  },
  "editor.formatOnSave": true
```

### Configurando Prisma no projeto

#### Diagrama

![DER](./assets/diagrama.png)

#### Dependências

- yarn add prisma
- yarn add @types/prisma -D
- não - yarn add @prisma/client

#### Inicializar Prisma

- yarn prisma init

```
$ yarn prisma init
yarn run v1.22.18
warning package.json: No license field
$ F:\NodeJS_Rocketseat\PrismaIO\node_modules\.bin\prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb (Preview).
3. Run yarn prisma db pull to turn your database schema into a Prisma schema.
4. Run yarn prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

Done in 2.99s.
```

### Apresentando o esqueleto do projeto

### Conhecendo o Prisma Studio

- Prisma Studio é um editor visual para os dados em seu banco de dados.
- rodar o prisma studio através da aplicação
- yarn prisma studio

### Conhecendo o Prisma Client

- O Prisma Client é um construtor de consultas gerado automaticamente e de tipo seguro, adaptado aos seus dados.
- _Gerar databases_

## 2 Trabalhando com tabelas

- Table = CREATE TABLE NOME_DA|\_TABELA (...)
- MODEL
- yarn prisma generate dev
- psql -h localhost -U postgres

### Criando tabela sem relacionamento

#### Cria as migrations e já instala o prisma client

- npx prisma migrate dev --name create_courses
- nome para o schema
- docker run -d --name postgresql -p 5432:5432 -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -e POSTGRES_DB=ignitenodejs -v /custom/mount:/var/lib/postgresql/data postgres
- docker exec -it postgresql bash
- psql -h localhost -U admin -W
- \l
- \c ignitenodejs
- \d

### Inserindo dados na tabela

- instalação do ts-node-dev e typescript

```
const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso NodeJS",
      description: "Curso excelente de NodeJs",
    },
  });
```

### Realizando buscas

- yarn ts-node-dev src/findOne.ts

### Atualização de dados

## 3 Relacionamento One to One

- teachers -> 1 para 1 -> courses
  ![Relacionamentos](./assets/relacionamento.png)
- yarn prisma migrate dev --create-only
- npx prisma migrate reset
- npx prisma migrate dev

### Criar tabela com relacionamento um para um

### Inserir dados em tabela com relacionamento

### Buscar dados em tabela com relacionamento

## 4 Relacionamento One to Many

### Criar tabela com um para muitos

### Inserir dados em tabela de um para muitos

## 5 Relacionamento Many to Many

### Criar tabela com relacionamento muitos para muitos

### Inserindo dados em tabela com relacionamento muito para muitos

### Realizar busca em relacionamento muito para muitos

### Remover item na tabela

## 6 Filters

### Trabalhando com filtering e sorting

### Trabalhando com pagination

### Trabalhando com queryRaw

## 7 Importação de banco de dados

### Importando banco de dados

## Referência

[Site Oficial](https://www.prisma.io/)
