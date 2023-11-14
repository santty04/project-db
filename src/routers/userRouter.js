const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();

router.post("/createUser", userController.createUser);
router.get("/listUsers", userController.listUsers);
router.put("/updateUser/:idUser", userController.updateUser);
router.delete("/disableUser/:idUser", userController.disableUser);
router.put("/enableUser/:idUser", userController.enableUser);

module.exports = router;
