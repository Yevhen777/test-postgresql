// module.exports = db;
const Knex = require("knex");

const connection = {
  // ssl: { rejectUnauthorized: false },
  user: "postgres",
  password: "100Mamoge",
  host: "localhost",
  port: "5432",
  database: "node_postgres",

  // migrations: {
  //   tableName: "articles",
  // },
};
const knex = Knex({
  client: "pg",
  connection,
});

module.exports = knex;
