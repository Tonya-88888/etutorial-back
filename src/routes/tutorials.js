const router = require("express-promise-router")();

const { tutorial } = require("../controllers");

router.route("/:id").get(tutorial.get);
router.route("/").post(tutorial.create);
router.route("/").get(tutorial.getAll);
router.route("/:id").put(tutorial.update);
router.route("/:id").delete(tutorial.delete);

module.exports = router;
