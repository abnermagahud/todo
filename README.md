

# Todo App


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

It will install the [`Hasura Cloud`](https://hasura.io/) and you can access the Hasura in your system.

URL: http://localhost:8080/

## Database Migration

Make sure you have [`Hasura CLI`](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli) installed .
 Go to `/hasura` directory:
```bash
$ cd hasura
```
and run:

```bash
$ hasura migrate apply 
```

## Install Dependencies

Make sure you already have [`nodejs`](https://nodejs.org/en/) installed in your system.

Go to `/frontend` directory 
```bash
$ cd frontend
```
And run
```bash
$ npm start # or yarn start
```


You can access the App in http://localhost:3000/