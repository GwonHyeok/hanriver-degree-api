const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.OPENSHIFT_NODEJS_PORT || 80;

app.use(cors());

const rp = require('request-promise');

app.get('/', function(req, res, next) {
  rp('http://hangang.dkserver.wo.tc', {json: true})
    .then(response => res.json(response))
    .catch(err => next(err));
});

app.listen(port);
