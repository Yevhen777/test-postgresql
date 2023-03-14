const Router = require("express");
const router = new Router();
const articleController = require("../controller/controller");

router.post("/articles", articleController.createArticle);

router.delete("/article/:id", articleController.deleterAticle);

module.exports = router;
