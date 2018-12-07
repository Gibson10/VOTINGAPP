var methodOverride = require("method-override"),
    session        = require('express-session'),
    LocalStrategy  = require('passport-local'),
    flash          = require('connect-flash'),
    User           = require('./models/user'),
    bodyParser     = require("body-parser"),
    passport       = require('passport'),
    mongoose       = require("mongoose"),
    express        = require("express"),
    app            = express();

var indexRoutes = require("./routes/index"),
    authRoutes  = require("./routes/auth");

//mongodb://africanblockchaininitiative:Banana1@ds125335.mlab.com:25335/ala_election_db
//mongodb://localhost/ala_elections
mongoose.connect("mongodb://localhost/ala_elections");

mongoose.Promise = global.Promise;

app.locals.moment = require("moment");

app.use(session({
    secret: 'ALA Centralized Distributed Network',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

//passport.use(new LocalStrategy(Admin.authenticate()));
//passport.serializeUser(Admin.serializeUser());
//passport.deserializeUser(Admin.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.use(function(req, res, next) {
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   res.locals.currentUser = req.user;
   next();
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);
app.use(authRoutes);

app.set("view engine", "ejs");

var port = process.env.PORT || 3000;
app.listen(port, function() {
   console.log("Server running.....");
});
