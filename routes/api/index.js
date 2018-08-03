const router = require("express").Router();
const users = require("./users");
const usersData = require("./usersData");

// routes
router.use("/users", users);
router.use("/usersData", usersData);

module.exports = router;
