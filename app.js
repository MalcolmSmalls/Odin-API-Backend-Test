const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const indexRouter = require('./routes/index')
const dotenv = require('dotenv')
const data = require("./data")
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const mongoDb = "YOUR MONGO URL HERE";
// mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "mongo connection error"));

// const User = mongoose.model(
//   "User",
//   new Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true }
//   })
// );

const app = express();
app.set("views", path.join( __dirname, 'views'));
app.set("view engine", "ejs");


app.use('/', indexRouter)

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => res.render("index"));


app.get('/users', (req, res) => {
    return res.send(Object.values(data.users))
})

app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource')
})

app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method on user/${req.params.userId} resource`)
})

app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource`)
})


app.listen(3000, () => console.log("app listening on port 3000!"));