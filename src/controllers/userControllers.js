const express = require("express");
//const router = express.Router()
const services = require("../services/userService");

const getUsers = async (req, res) => {
  try {
    const users = await services.getUsers();
    res
      .status(200)
      .json({ status: "resource geted successfully", data: users });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await services.getOneUser(id);
    res.json({ status: "resource geted successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const getAgeUsers = async (req, res) => {
  try {
    let { min, max } = req.params;
    if (max <= min || isNaN(max)) {
      res.status(400).json({
        status: "Bad request",
        reason: "enter the minimum and maximum values ​​correctly!",
      });
    }
    const users = await services.getAgeUsers(Number(min), Number(max));
    res.json({ status: "resource geted successfully", data: users });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const getCountryUsers = async (req, res) => {
  try {
    const { country } = req.params;
    const users = await services.getCountryUsers(country.toLowerCase());
    res.json({ status: "resource geted successfully", data: users });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, age, country } = req.body;
    if (!name || !email || !age || !country) {
      res.status(400).json({ status: "Erro", reason: "Bad request" });
    } else {
      const user = await services.createUser(
        name.toLowerCase(),
        email,
        Number(age),
        country.toLowerCase()
      );
      res
        .status(201)
        .json({ status: "resource created successfully", data: user });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, country } = req.body;
    console.log(name, age, country);
    if (!name && !age && !country) {
      res.status(400).json({ status: "error", reason: "Bad request" });
    }
    const user = await services.updateUser(id, name, age, country);
    res.json({ status: "resource updated successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = services.deleteUser(id);
    res
      .status(200)
      .json({ status: "resource deleted successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: "error", err: error });
  }
};

module.exports = {
  getUsers,
  updateUser,
  deleteUser,
  createUser,
  getAgeUsers,
  getCountryUsers,
  getOneUser,
};
