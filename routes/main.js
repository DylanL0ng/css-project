const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home")
})

router.get("*", (req, res) => {
    res.send("404 Page not found. Or not made yet")
})

module.exports = router