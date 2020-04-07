### How to populate DB

1. Run dynamodb docker: `$ docker run -p 9001:8000 amazon/dynamodb-local`
2. Setup db: `$ yarn db:setup`
3. Parse data: `$ yarn parse:seeds ./data/truncated.csv 2020-02-10 25`

### How to query the DB

1. Keep dynamodb docker running
2. Start console: `$ yarn console`
3. Copy-paste the following code: 

```js
function log(prom) { const start = Date.now(); return prom.then((res) => { console.log(`Finished in ${Date.now() - start}`); console.log(res); }).catch(console.log) }
const { users, usersLocationHistory, seedsLocationHistory } = require('./src/db/stores');
let point = { longitude: -58.5452598, latitude: -34.4961459 };
let prom = log(usersLocationHistory.queryRadius(100, point));

point = { longitude: -66.85239, latitude: -29.406763 };
prom = log(seedsLocationHistory.queryRadius(1000, point));
```

The result will be printed
