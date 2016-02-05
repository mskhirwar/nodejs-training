var express = require("express"),
    bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

var router = express.Router();

router.route('/books').get(function(req, res) {
    var responseJSON = {hello : "This is json data!"};
    
    res.json(responseJSON);
});

app.use("/api", router);

var port = process.env.PORT;

app.get('/', function(req, res) {
    //res.send("Welcome to Express Framework!");
    
    res.sendFile(__dirname + "/express.html");
});

app.post('/login', function(req, res) {
    var userName = req.body.username,
        password = req.body.password;
        
    console.log(userName +  " " + password);
    
    return res.end("success");
});

app.listen(port, function() {
   console.log("Server is running at " + process.env.IP +":"+ process.env.PORT); 
});