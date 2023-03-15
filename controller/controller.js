const knex = require("../db");

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

// Первый вариант

const dateDb = require("../dataDb.json");
const parseDate = JSON.parse(JSON.stringify(dateDb));
const popularPeople = parseDate.filter((element) => {
  if (element.likes > 0) {
    return console.log(`Вы популярный пользователь ${element.id}`);
  } else {
    console.log("Набирайте лайки");
  }
});

// const likesJson = JSON.stringify(popularPeople);
// console.log(likesJson);

// Второй вариант///////////////////////
// const results = [];

// fs.createReadStream("articles.csv")
//   .pipe(csv())
//   .on("data", (data) => results.push(data))
//   .on("end", () => {
//     console.log("ок");
//   });

// console.log(results);

class ArticleController {
  async createArticle(req, res) {
    // const { name, sername } = req.body;
    console.log("createArticleRequest");
    // const article = await db.query(
    //   `Insert into  deleted_articles (name,sername) values ($1,$2) RETURNING *`,
    //   [name, sername]
    // );

    const articlesDbResponce = await db.query("select * from articles");
    console.log(articlesDbResponce);
    res.json(articlesDbResponce);
  }

  async deleterAticle(req, res) {}
}

module.exports = new ArticleController();
