const Knex = require("knex");

// const knexFile = require("./knexfile");
// const db = knex(knexFile.development);
const connection = {
  ssl: { rejectUnauthorized: false },

  user: "postgres",
  password: "100Mamoge",
  host: "localhost",
  port: "5432",
  database: "node_postgres",
};
const knex = Knex({
  client: "pg",
  connection,
});
module.exports = knex;

// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   password: "100Mamoge",
//   host: "localhost",
//   port: "5432",
//   database: "node_postgres",
// });

// module.exports = pool;
