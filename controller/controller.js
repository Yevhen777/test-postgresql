const knex = require("../db");

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../convertCopy.json");
const data = JSON.parse(fs.readFileSync(dataPath));

class ArticleController {
  async createArticle(req, res) {
    try {
      await knex.schema.createTable("articles", function (table) {
        table.increments("id").primary();
        table.string("articleId").unique().notNullable();
        table.string("userId").notNullable();
        table.string("vehicleId").notNullable();
        table.bigInteger("publicationDate").notNullable();
        table.string("brandId").notNullable();
        table.string("modelId").notNullable();
        table.string("generationId").notNullable();
        table.integer("likes").notNullable();
        table.integer("comments").notNullable();
        table.integer("engine");
        table.integer("wheeldrive");
        table.integer("transmission");
        table.specificType("about", "integer[]");
      });
      const insertData = data.map((el) => {
        const { id, ...rest } = el;
        return {
          ...rest,
          engine: rest.engine === "" ? null : Number(rest.engine),
          wheeldrive: rest.wheeldrive === "" ? null : Number(rest.wheeldrive),
          transmission:
            rest.transmission === "" ? null : Number(rest.transmission),
        };
      });

      await knex("articles").insert(insertData);

      res.json("ок");
    } catch (err) {
      console.log(err);
    }
  }

  async getAutoByQuery(req, res) {
    try {
      const { carId } = req.params;

      const { sort, engine, transmission, wheeldrive, about } = req.query;
      console.log(sort, carId, engine, transmission, wheeldrive, about);

      const query = await knex("articles")
        .where({ generationId: carId })
        .andWhere(function () {
          if (engine >= 0 && engine <= 4) {
            return this.where({ engine });
          }

          if (transmission >= 0 && transmission <= 4) {
            return this.where({ transmission });
          }

          if (wheeldrive >= 0 && wheeldrive <= 2) {
            return this.where({ wheeldrive });
          }
          if (sort === "date") {
            return item.orderBy("date");
          } else if (sort === "comments") {
            return item.orderBy("comments");
          } else if (sort === "likes") {
            return item.orderBy("likes");
          } else {
            return item;
          }
        })

        .then((rows) => {
          console.log(rows);
        })
        .catch((err) => {
          console.error(err);
        });

      console.log(query);

      res.json(query);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ArticleController();
