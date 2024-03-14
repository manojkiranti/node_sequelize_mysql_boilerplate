const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router
  .route("/")
  .get(userController.getUsers)
  .post(validate(userValidation.createUser), userController.createUser);

module.exports = router;
