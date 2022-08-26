const { userModel } = require("../models/modelos.js");

const getUsers = async () => {
  const users = await userModel.find();
  // console.log(users);
  return users;
};

const getOneUser = async (id) => {
  const user = await userModel.findById(id);
  return user;
};

const getAgeUsers = async (min, max = 0) => {
  console.log(min, max);
  let users;
  if (max === 0) {
    users = await userModel.find().where(`age`).gt(min);
  } else {
    users = await userModel.find().where(`age`).gt(min).lte(max);
  }
  return users;
};

const getCountryUsers = async (country) => {
  const users = await userModel.find({ country: new RegExp(country, "i") });
  // .where({ country: country });
  return users;
};

const createUser = async (name, email, age, country) => {
  console.log("llegue a db");
  const user = new userModel({
    name,
    email,
    age,
    country,
  });
  await user.save();
};

const updateUser = async (id, name, age, country) => {
  console.log(id, name, age, country);
  const user = await userModel.updateOne(
    { _id: id },
    {
      $set: { name, age, country },
    }
  );
  return user;
};

const deleteUser = async function borrarAlumno(id) {
  const user = await usermModel.updateOne({ _id: id }, { visibility: false });
  return user;
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getAgeUsers,
  getCountryUsers,
};
