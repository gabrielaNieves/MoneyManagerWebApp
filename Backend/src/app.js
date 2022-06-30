const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const cors = require("cors");
var corsOptions = {
  origin: "*"
};

//routes required
let transactionRoutes = require('../routes/api/transaction');
let userRoutes = require('../routes/api/user');

//HTTP METHODS
const methodOverride = require("method-override");          
const req = require('express/lib/request');
app.use(methodOverride("_method"));

//CORS
app.use(cors(corsOptions));
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }
app.use(allowCrossDomain);

//BODY-PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // To get req.body

//SESSION
app.use(session( {secret: "Secret"}));

let port = 3001
app.listen(process.env.PORT || port, () => console.log("server: ON  Port:", port));

//APIs SOURCES

app.use('/api', transactionRoutes)
app.use('/api/user', userRoutes)