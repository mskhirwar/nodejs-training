var express = require("express"),
    path = require("path");
    
var app = express();


var routes = require("./indexJade");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", routes);


app.listen(process.env.PORT, function() {
    
    console.log("Server is running at " + process.env.IP +":"+ process.env.PORT);
});