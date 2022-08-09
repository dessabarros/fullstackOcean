const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('servidor Andressa no ar...')
})

app.listen(3000)
app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});
app.get("/dia", function (req, res) {
    res.send("um dia triste nublado");
})