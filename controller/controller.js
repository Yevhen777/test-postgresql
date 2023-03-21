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
        .select("*")
        .where({ generationId: carId });
      if (sort === "date") {
        query.orderBy("date");
      } else if (sort === "comments") {
        query.orderBy("comments");
      } else if (sort === "likes") {
        query.orderBy("likes");
      }

      if (engine >= 0 && engine <= 4) {
        query.andWhere({ engine });
      }

      if (transmission >= 0 && transmission <= 4) {
        query.andWhere({ transmission });
      }

      if (wheeldrive >= 0 && wheeldrive <= 2) {
        query.andWhere({ wheeldrive });
      }

      res.json(query);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ArticleController();
