const { Client } = require('pg');
const { db } = require('../app-config');

const client = new Client({
  user: db.user,
  database: db.database,
  password: db.password,
  port: db.port,
  host: db.host,
});

client.connect().then(() => {
  console.log(`Connected to ${db.database}`);
});

module.exports = {
  evolutionsFolderPath: ['evolutions'],
  runQuery(query) {
    return client.query(query).then((result) => result.rows);
  },
};
