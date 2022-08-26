const express = require("express");
const router = express.Router();
const {
  getUsers,
  getOneUser,
  getAgeUsers,
  getCountryUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");

router
  .get("/", getUsers) //Entrega todos los usuarios
  .get("/:id", getOneUser) //Entrega un usuario por su id
  .get("/age/:min/:max", getAgeUsers) //Entrega usuarios segun los limites de edad
  .get("/country/:country", getCountryUsers) //Entrega usuarios segun matchee su nacionalidad con el params
  .post("/post", createUser)
  .put("/update/:id", updateUser)
  .put("/delete/:id", deleteUser);

module.exports = router;

