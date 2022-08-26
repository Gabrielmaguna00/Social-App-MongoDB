const DB = require("../database/UserDB");

const getUsers = () => {
  const allUsers = DB.getUsers();
  return allUsers;
};

const getOneUser = (id) => {
  const user = DB.getOneUser(id);
  return user;
};

const getAgeUsers = (min, max) => {
  const users = DB.getAgeUsers(min, max);
  return users;
};

const getCountryUsers = (country) => {
  const users = DB.getCountryUsers(country);
  return users;
};

const createUser = (name, email, age, country) => {
  const user = DB.createUser(name, email, age, country);
  return user;
};

const updateUser = (id, name, age, country) => {
  const user = DB.updateUser(id, name, age, country);
  return user;
};

const deleteUser = (id) => {
  const user = DB.deleteUser(id);
  return user;
};

module.exports = {
  getUsers,
  getOneUser,
  getAgeUsers,
  getCountryUsers,
  createUser,
  updateUser,
  deleteUser,
};
