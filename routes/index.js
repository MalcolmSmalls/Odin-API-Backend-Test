const express = require('express')
const router = express.Router()
const message = require('./message')
const session = require('./session')
const user = require('./user')



router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
  });

module.exports = { session, user, message }