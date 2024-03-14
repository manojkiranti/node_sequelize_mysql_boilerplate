const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const { userService } = require("../services");

const getUsers = catchAsync(async (req, res, next) => {
  const users = await userService.getUsers();
  res.send(users);
});

const createUser = catchAsync(async (req, res, next) => {
  const user = await userService.createUser();
  res.send(user);
});

module.exports = {
  getUsers,
  createUser,
};
