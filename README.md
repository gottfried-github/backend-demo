# Description
Tech stack: `Express.js`, `MongoDB`+`Mongoose`, `jsonwebtoken`, `Typescript`.

# Instructions
First, clone the repo. Then, inside the project directory, run:

`npm i`

I containerized the application, so here are instructions on how to run it.

## Initialize the database
First, run the initialization script:

`./init.sh`

Then, run docker and wait a few moments until the `init` container runs the script:

`docker compose -f init-db.docker-compose.yml up --build`

This will create the database and a user for it.

Now, you can run the app.

## Run the app
Run docker:

`docker compose -f run.docker-compose.yml up --build`

Now you can go over to `localhost:3000`