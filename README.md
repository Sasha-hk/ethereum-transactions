# Ethereum transactions list

Technologies used:

- Front-end (Next.js, React.js, TailwindCSS, PostCSS)
- Back-end (Nest.js, Mongoose)
- Database (MongoDB)
- Container (Docker)
- Code style (ESLint, EditorConfig)
- Deployment environment (VPS)

## Run locally

Create .env.dev at the [root](./) of the project, see [.env.sample](.env.sample), also add your Etherscan API key.

It should look something like this:

```txt
API_PORT=3030
FRONTEND_PORT=3031

MONGODB_URL="mongodb://root:example@0.0.0.0:27017"
ETHERSCAN_API_KEY="<your-api-key>"
ETHERSCAN_CALLS_PER_SECOND=5
INIT_BLOCK_COUNT=1000
```

Create .env.local in the [frontend](./frontend/) directory:

```txt
API_URL="http://localhost:3030"
```

Start Docker:

```sh
docker-compose up -d
```

Run API:

```sh
cd api
yarn start:dev
```

Open another terminal and run front-end:

```sh
cd frontend
yarn dev
```

Done

Open this [link](http://localhost:3031)
