# Simple React Todo App


## Instructions

First, open a terminal and clone this repository.
```bash
$ git clone https://github.com/abnermagahud/todo.git
```
Then, go to `/todo/backend`directory: 
 ```bash
$ cd todo/backend
```
And run: 
```bash
$ docker-compose up -d --build
```

## Database Migration

Make sure you have [`Hasura CLI`](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli) installed .
 Go to `/hasura` directory:
```bash
$ cd hasura
```
and run:

```bash
$ hasura metadata apply
```

## Accessing Hasura Console in Web

Run: 

```bash
$ hasura console
```
and it will redirect you to a browser.

## Install Dependencies

Make sure you already have [`nodejs`](https://nodejs.org/en/) installed in your system.

Go to `/frontend/todo-app` directory 

```bash
$ cd frontend/todo-app
```
And run

```bash
$ npm start # or yarn start
```


You can access the App in http://localhost:3000/