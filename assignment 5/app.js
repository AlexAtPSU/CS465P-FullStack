const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/submit', function (req, res) {

    res.send('name: '+req.body.firstname + '<br>email: '+req.body.comments + '<br>comments: '+req.body.comments);
});

app.listen(8080, function () {
    console.log('Server Online');
});
