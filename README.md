# kaching backend

<p align="center">
    <img src="./assets/logo.svg#gh-dark-mode-only" width='40%' style="filter: invert(100%)">
    <img src="./src/assets/logo.svg#gh-light-mode-only" width='40%'>
</p>
A backend application for kaching personal finance tracker to track monthly expenses and budgets based on day, month or year.
Project 3 for Rocket Academy Bootcamp

## Features

- Add new users or check for existing users in the database
- Add, edit, and delete transactions/budgets/categories database created by user
- Get users informations such as categories, transactions, budgets and etc...

## Tech Used

- Backend: [Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/), [Sequelize](https://sequelize.org/)
- Database: [PostgreSQL](https://www.postgresql.org/)

## Setup

Before starting, it is required to run the following steps for the application to work. Make sure you have all the necessary software before running this

1. Clone repo to local

2. Configure `.env` file, make sure to get your own API keys stated below and insert it into your `.env` file
   - If unsure where to get API keys, refer to the Tech Used for the documents

```
PORT = <Insert PORT number for your backend, e.g. 8080>
USERNAME = <PostgreSQL username, e.g. postgres>
PASSWORD = <Insert password if exist>
DATABASE = <Insert database name, e.g. kaching>
HOST = localhost
DIALECT = <Insert dialect, for this app is postgres>
SENDGRID_API_KEY = <Insert SENDGRID API key>
```

3. Install all dependencies required in this repo

```
npm i
```

4. Next run database migration, and seeders before starting. Make sure no error.

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

5. Once done, run either one of the command below to run

```
node index.js
nodemon index.js
```

6. Enjoy! You can use postman to test out the requests

## Future improvements

- More functions/routers to make better requests such as querying dates
- Add functions for task scheduling, to automatically send email and notifications to the user to remind them to pay their bills

## Contributors

- [Me, Shawn Goh](https://github.com/shawn-goh24)
