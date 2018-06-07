const { jokenpo } = require('../controller');
const { Router } = require('express');
const route = Router();

route.get('/jokenpo', (req, res) => {
  jokenpo.getResult(req.query, (err, data) => {
    if(err) res.status(400).send(err);
    res.status(200).send(data)
  })
});

module.exports = route;
