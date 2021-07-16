
# Todo App


## Instructions

First open a terminal and clone this repository.
```bash
$ git clone https://github.com/abnermagahud/todo.git
```
Then, go to `/backend`directory: 
 ```bash
cd backend
```
And run: 
``docker-compose up -d --build``

It will install the [`Hasura Cloud`](https://hasura.io/) and you can access the Hasura in your system.

URL: http://localhost:8080/

## Migration

Make sure you have [`Hasura CLI`](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli) installed  go to `/hasura` directory.
```bash
cd hasura
```
and run:

```bash
hasura migrate apply
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

Go to `/frontend` directory 
```bash
cd frontend
```
And run
```bash
$ npm start # or yarn start
```


You can access the App in http://localhost:3000/