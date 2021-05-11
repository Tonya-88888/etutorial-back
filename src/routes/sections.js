const router = require("express-promise-router")();

const { section } = require("../controllers");

router.route("/:id").get(section.get);
router.route("/").post(section.create);
router.route("/").get(section.getAll);
router.route("/:id").put(section.update);
router.route("/:id").delete(section.delete);

module.exports = router;
