var express = require("express");
var app =express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var flash = require("connect-flash");
app.locals.moment = require("moment");
var passport = require("passport");
var localStratergy = require("passport-local");
var methodOverride = require("method-override");
var Campground = require("./models/campground");
var User = require("./models/user");
var seedDB = require("./seeds");
var Comment = require("./models/comment");
var campgroundRoutes = require("./routes/campgrounds");
var commentRoutes = require("./routes/comments");
var indexRoutes = require("./routes/index");

mongoose.connect("mongodb+srv://aayush:computer123@cluster0-tml0t.mongodb.net/yelpcamp?retryWrites=true&w=majority");
// mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//Passport Config
app.use(require("express-session")({
    secret: "I am the Best",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

app.listen(process.env.PORT, process.env.IP);

