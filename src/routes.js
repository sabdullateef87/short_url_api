const express = require("express");
const router = express.Router();
const { createUrl, redirect } = require("./conrollers");

router.get("/", (req, res) => res.send("We are live on heroku !"));
router.post("/url", createUrl);
router.get("/:code", redirect);

module.exports = router;
