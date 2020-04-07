# COVID

## Getting Started

#### Database
You need Docker.

```
docker pull amazon/dynamodb-local
docker run -p 9001:8000 amazon/dynamodb-local
```

#### Backend

Create a `development.json` file at `covid-backend` with all the configurations stated in `covid-backend/src/config/index.js`.

```
cd covid-backend
yarn install
yarn start
```

#### Frontend

```
cd covid-site
yarn install
yarn start
```
