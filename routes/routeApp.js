const Router = require("express");
const router = new Router();
const articleController = require("../controller/controller");

router.get("/articles", articleController.createArticle);

module.exports = router;
