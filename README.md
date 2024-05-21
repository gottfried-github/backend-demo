# App

## Description


## Install

```bash
$ npm install
```

## Initialize the database
First, run the initialization script:
`./init.sh`

Then, run docker and wait a few moments until the `init` container runs the script:
`docker compose -f init-db.docker-compose.yml up --build`

## Run the app
Run docker:
`docker compose -f run.docker-compose.yml up --build`

Now you can go over to `localhost:3000`