const express = require("express");
const {
  loginController,
  registerController,
  getuserController,
  deleteuserController,
  updateuserController
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

router.post("/get-user", getuserController);
router.post("/delete-user", deleteuserController);
router.post("/update-user", updateuserController);

module.exports = router;