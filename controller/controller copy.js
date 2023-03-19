const knex = require("../db");

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../convertCopy.json");
const data = JSON.parse(fs.readFileSync(dataPath));

// const articles = data.map((el) => {
//   const { id, ...rest } = el;
//   // delete el.id;
//   return rest;
// });

class ArticleController {
  async createArticle(req, res) {
    try {
      // console.log("Create article response", articles.length, articles[1]);
      Promise.all(
        data.map((el) => {
          const { id, ...rest } = el;
          console.log(rest);
          // delete el.id;
          const insertData = {
            ...rest,
            engine: rest.engine === "" ? null : Number(rest.engine),
            wheeldrive: rest.wheeldrive === "" ? null : Number(rest.wheeldrive),
            transmission:
              rest.transmission === "" ? null : Number(rest.transmission),
          };
          return knex("articles").insert(insertData);
        })
      )
        .then(() => {
          console.log("All articles inserted successfully");
        })
        .catch((error) => {
          console.error(error);
        });
      // data.map((el) => {
      //   const { id, ...rest } = el;
      //   console.log(rest);
      //   // delete el.id;
      //   knex("articles").insert(rest);
      // });

      // await knex.schema.createTable("articles", function (table) {
      //   table.increments("id").primary();
      //   table.string("articleId").unique().notNullable();
      //   table.string("userId").notNullable();
      //   table.string("vehicleId").notNullable();
      //   table.bigInteger("publicationDate").notNullable();
      //   table.string("brandId").notNullable();
      //   table.string("modelId").notNullable();
      //   table.string("generationId").notNullable();
      //   table.integer("likes").notNullable();
      //   table.integer("comments").notNullable();
      //   table.integer("engine");
      //   table.integer("wheeldrive");
      //   table.integer("transmission");
      //   table.specificType("about", "integer[]");
      // });

      // await knex.schema.createTable("new_test", function (table) {
      //   table.increments("id");
      //   table.string("articleId").notNullable();
      //   table.string("userId").notNullable();
      //   table.string("vehicleId").notNullable();
      //   table.decimal("publicationDate").notNullable();
      //   table.string("brandId").notNullable();
      //   table.string("modelId").notNullable();
      //   table.string("generationId").notNullable();
      //   table.decimal("likes").notNullable();
      //   table.decimal("comments").notNullable();
      //   table.decimal("engine");
      //   table.decimal("wheeldrive");
      //   table.decimal("transmission");
      //   table.decimal("about");
      // });
      res.json("ок");
    } catch (err) {
      console.log(err);
    }
  }

  async deleterAticle(req, res) {}
}

module.exports = new ArticleController();
