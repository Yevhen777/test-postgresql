const knex = require("../db");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../convertCopy.json");
const data = JSON.parse(fs.readFileSync(dataPath));

const articles = data.map((el) => {
  const { id, ...rest } = el;
  // delete el.id;
  return rest;
});

class ArticleController {
  async createArticle(req, res) {
    try {
      console.log("Create article response", articles.length, articles[1]);

      const addArticle = await knex("articles").insert(articles[1]);
      res.json("ок");
    } catch (err) {
      console.log(err);
    }
  }

  async deleterAticle(req, res) {}
}

module.exports = new ArticleController();
