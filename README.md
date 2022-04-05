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

- **Opções dentro da ligação com outra tabela**

```
async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java 17",
      duration: 500,
      description: "Curso",
      teacher: {
        //aqui
      },
    },
  });
}
```

- Se tem certeza que existe esse ID

```
connect: {          id: "e2ee5520-cc7f-4e9c-a415-703fd298efb8",        },
```

- Se tem certeza que não existe

```
create: {
          name: "Daniele Leão",
        },
```

- Talvez não exista

```
 connectOrCreate: {
          where: {
            name: "Andre Gois",
          },
          create: {
            name: "Andre Gois",
          },
        },
```

### Criar tabela com relacionamento um para um

![um pra muitos](./assets/umParaMuitos.png)

- npx prisma format
- npx prisma migrate dev
- yarn prisma studio

### Inserir dados em tabela com relacionamento

- yarn ts-node-dev src/authors/create.ts

### Buscar dados em tabela com relacionamento

- yarn ts-node-dev src/books/create.ts

## 4 Relacionamento One to Many

- Muitos para muitos
  ![Muitos para muitos](./assets/MuitosParaMuitos.png)

### Criar tabela com um para muitos

```
model CoursesModules {
  id           String   @id @default(uuid())
  course       Courses  @relation(fields: [fk_id_course], references: [id])
  fk_id_course String
  module       Modules  @relation(fields: [fk_id_module], references: [id])
  fk_id_module String
  created_at   DateTime @default(now())

  @@map("courses_module")
}
```

### Inserir dados em tabela de um para muitos

- Inserir dados na tabela de muitos pra muitos

## 5 Relacionamento Many to Many

### Criar tabela com relacionamento muitos para muitos

### Inserindo dados em tabela com relacionamento muito para muitos

- npx prisma migrate dev
- yarn prisma generate dev
- yarn ts-node-dev src/modules/create.ts
- yarn ts-node-dev src/modules/createManyToMany.ts

### Realizar busca em relacionamento muito para muitos

- yarn ts-node-dev src/search/findByCourse.ts

### Remover item na tabela

- yarn ts-node-dev src/delete/delete.ts

## 6 Filters

### Trabalhando com filtering e sorting

- yarn ts-node-dev src/filter/filterStartWith.ts

### Trabalhando com pagination

### Trabalhando com queryRaw

- yarn ts-node-dev src/pagination/pagination.ts

## 7 Importação de banco de dados

- yarn ts-node-dev src/queryRaw/queryRaw.ts

### Importando banco de dados

- _schema.prisma_ limpo
- vai no .env
- coloca od dados do banco a qual deseja importar

```
DATABASE_URL="postgresql://admin:admin@localhost:5432/ignitenodejs?schema=public"
```

- yarn prisma db pull

## Referência

[Site Oficial](https://www.prisma.io/)
