const Router = require("express");
const router = new Router();
const articleController = require("../controller/controller");

// router.get("/articles", articleController.createArticle);
router.get("/model/:carId", articleController.getAutoByQuery);

module.exports = router;
