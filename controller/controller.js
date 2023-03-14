const db = require("../db");

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
