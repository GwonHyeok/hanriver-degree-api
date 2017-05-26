const express = require('express');
const cors = require('cors');
const app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(cors());

const rp = require('request-promise');

app.get('/', function(req, res, next) {
  rp('http://hangang.dkserver.wo.tc', {json: true})
    .then(response => res.json(response))
    .catch(err => next(err));
});

app.listen(port, ipaddress);
