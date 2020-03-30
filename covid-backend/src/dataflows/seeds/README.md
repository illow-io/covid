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
const { users, seedsLocationHistory } = require('./src/db/stores');
let prom = log(seedsLocationHistory.queryRadius(1000, { latitude: -29.406763, longitude: -66.85239 }));
```

The result will be printed
