const router = require("express-promise-router")();

const { quiz } = require("../controllers");

router.route("/").post(quiz.create);
router.route("/").get(quiz.getAll);
router.route("/section/:id").get(quiz.get);
router.route("/:id").put(quiz.update);
router.route("/:id").delete(quiz.delete);

module.exports = router;
