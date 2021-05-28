const router = require("express-promise-router")();

const { qwiz } = require("../controllers");


router.route("/").post(qwiz.create);
router.route("/").get(qwiz.getAll);
router.route("/:id").get(qwiz.get);
router.route("/:id").put(qwiz.update);
router.route("/:id").delete(qwiz.delete);


module.exports = router;
