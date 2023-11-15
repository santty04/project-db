const express = require("express");
const tableController = require("../controllers/tableController.js");
const microServices = require("../microServices/countTable.js")
const router = express.Router();

router.post("/createTable", tableController.createTable);
router.get("/listTables", tableController.listTables);
router.put("/updateTable/:idTable", tableController.updateTable);
router.delete("/disableTable/:idTable", tableController.disableTable);
router.put("/enableTable/:idTable", tableController.enableTable);
router.get("/countTable", microServices.countTable);


module.exports = router;
