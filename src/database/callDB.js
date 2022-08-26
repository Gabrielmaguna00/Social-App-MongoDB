const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongooseConnect = mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log(err));

module.exports = {
  mongooseConnect,
};
