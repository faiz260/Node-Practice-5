const express = require('express');
const api = require('./api')
const app = express();

app.use(express.json())

app.get('/', api.home);

app.post('/signup', api.signup)

app.post('/login', api.login)

module.exports = ({ port, cb }) => {
    app.listen(port, cb)
}