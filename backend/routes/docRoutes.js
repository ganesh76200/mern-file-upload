const { addDocController, getAlldocsController, getAllDeleteController } = require("../controller/docController")

const router = require("express").Router()
router 
   .get("/", getAlldocsController)
   .post("/add", addDocController)
   .delete("/destroy", getAllDeleteController)

module.exports = router