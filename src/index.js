const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const morgan = require("morgan");
const mongooseConnect = require("./database/callDB");

dotenv.config();

//VARIABLES
const PORT = process.env.PORT || 3000;

const v1UsersRoute = require("./v1/routes/user");
const v1PostsRoute = require("./v1/routes/post");
//MIDLEWARES
app.use(express.json());
// app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/user", v1UsersRoute);
app.use("/api/v1/post", v1PostsRoute);

//LISTEN
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
