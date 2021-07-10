const router = require("router").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.SendFile(path.join(__dirname, "../public/index.html"));
});

//excersise

//stats

module.exports = router;