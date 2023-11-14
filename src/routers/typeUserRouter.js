const express = require("express");
const typeUserController = require("../controllers/typeUserController.js");
const router = express.Router();

router.post("/createTypeUsers", typeUserController.createTypeUser);
router.get("/listTypeUsers", typeUserController.listTypeUsers);
router.put("/updateTypeUser/:idTypeUser", typeUserController.updateTypeUser);
router.delete("/disableTypeUser/:idTypeUser", typeUserController.disableTypeUser);
router.put("/enableTypeUser/:idTypeUser", typeUserController.enableTypeUser);

module.exports = router;
