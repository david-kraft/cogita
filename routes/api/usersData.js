const router = require("express").Router();
const usersDataController = require("../../controllers/usersDataController");

// Matches with "/api/usersData"
router.route("/")
  .get(usersDataController.findAll)
  .post(usersDataController.create);

// Matches with "/api/usersData/:id"
router
  .route("/:id")
  .get(usersDataController.findById)
  .put(usersDataController.update)
  .delete(usersDataController.remove);

module.exports = router;
