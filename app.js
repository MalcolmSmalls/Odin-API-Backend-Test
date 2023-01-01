const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const indexRouter = require('./routes/index')
const dotenv = require('dotenv')
const data = require("./models/data")
const routes = require('./routes')

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set("views", path.join( __dirname, 'views'));
app.set("view engine", "ejs");



app.use((req, res, next) => {
	req.context = {
		data,
		me: data.users[1],
	};
	next();
});

app.use('/messages', routes.message)
app.use('/session', routes.session)
app.use('/users', routes.user)


app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));




app.listen(3000, () => console.log("app listening on port 3000!"));