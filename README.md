## Description

This the back-end for a eletric system. This back-end only contains the function for user. The recommanded data base for this project is postgreSQL.

## Database

The recommanded data base for this project is postgreSQL. Please use postgreSQL to create a new database with username of 'postgres' and password of 'admin'.Then, name the database 'eletric_system_data'. and import the the .sql file from

```bash
db\eletric_system_db.sql
```

However, if you want to use the other database or use your own database setting, you can customize the connection set up in

```bash
src\providers\database.providers.ts
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Use the OpenAPI

After application started, please open it with:

```bash
http://localhost:3000/api
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
