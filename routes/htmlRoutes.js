const router = require("router").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.SendFile(path.join(__dirname, "../public/index.html"));
});

//excersise
router.get("/exercise", (req, res) => {
    res.SendFile(path.join(__dirname, "../public/exercise.html"));
})

//stats
router.get("/stats", (req, res) => {
    res.SendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;