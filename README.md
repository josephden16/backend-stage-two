# Stage Two Backend Task

Project Description

## Installation

Follow these steps to install the project on your machine:

Clone the repo:

```bash
git clone https://github.com/josephden16/stage-two-backend.git
cd stage-two-backend
```

Install the dependencies:

```bash
pnpm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Running locally:

```bash
pnpm dev
```

Linting:

```bash
# run ESLint
pnpm lint

# fix ESLint errors
pnpm lint:fix

# run prettier
pnpm prettier

# fix prettier errors
pnpm prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=5000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/backend-stage-two-task

```

<!-- ## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files. -->

<!-- ### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user -->
