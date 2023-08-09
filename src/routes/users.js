const express = require("express");
const UsersController = require("../controller/users");

const router = express.Router();

// POST method / CREATE
router.post("/", UsersController.createNewUsers);

// GET method
// didalam file router tidak perlu path lebih spesifik lagi seperti "/users" cukup "/"
router.get("/", UsersController.getAllUsers); //lalu digunakan controller dalam fungsi ini

// UPDATE method /PATCH/PUT
router.patch("/:idUser", UsersController.updateUser);

// DELETE method
router.delete("/:idUser", UsersController.deleteUser);

module.exports = router;
