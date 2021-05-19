const router = require("express-promise-router")();

const { section } = require("../controllers");

router.route("/tutorial/:id").get(section.get);
router.route("/:id").get(section.getAll);
router.route("/").post(section.create);
router.route("/").get(section.getAll);
router.route("/:id").put(section.update);
router.route("/:id").delete(section.delete);

module.exports = router;
