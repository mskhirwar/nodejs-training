var express = require("express"),
    session = require("express-session"),
    cookieParser = require("cookie-parser");
    
var app = express();

app.use(cookieParser());
app.use(session({
    secret: "anyStringData",
    saveUninitialized: true,
    resave: true
}));

app.use("/", function(req, res) {
    res.send("Our first cookie & session management!"); 
    
    console.log(req.cookies);
    console.log("---------");
    console.log(req.session);
    
    var sessionState = req.session;
    
    sessionState.SomeValue = "actual value";
    
});

app.listen(process.env.PORT);

console.log("Server is running at " + process.env.IP +":"+ process.env.PORT);