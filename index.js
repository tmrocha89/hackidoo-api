'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var jwt = require("jwt-simple");
var auth = require("./Auth.js")();
var users = require("./repository/users.js");
var cfg = require("./config.js");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(auth.initialize());

var port = process.env.PORT || 3000;


app.get('/', function(req, res) {
    res.send('Vai a volta, porque daqui não passas');
});

app.post("/token", function(req, res) {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

app.get("/user", auth.authenticate(), function(req, res) {
    res.json({ works: true });
});

app.get('/collections', function(req, res) {
    res.send("Returning all collections");
});

app.get('/collection/:id/', function(req, res) {
    var id = req.params.id;
    res.send("Returning recipes from collection " + id);
});

app.post('/collection', function(req, res) {
    res.send(req.body);
    res.send("saving stuffs");
});

app.post('/collection/:id/recipe', function(req, res) {
    res.send(req.body);
    //res.send("saving a recipe");
});

app.listen(port);
module.exports = app;