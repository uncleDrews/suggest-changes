const  express = require("express");
const router  = express.Router();
const articleController = require('../conntrollers/changes.controller');


router.get("/suggest-change",articleController.index);
router.post("/suggest-change",articleController.create);
router.put("/suggest-change/:id",articleController.update);
router.delete("/suggest-change",articleController.delete);
router.get("/article-parse",articleController.parsePage);
module.exports = router;