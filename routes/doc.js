const express = require("express");
const router = express.Router();


const api = require('../api.json')

router.get("/api", (req, res) => {
    res.send(api)
});

module.exports = router;