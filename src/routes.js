const express = require('express');

const userControl = require('./controller/userControl');

const routes = express();


routes.get('/login', (req, res)=>{
    res.sendFile('login.html', {root: '../pages'});
});



/*app.get("/login/login.css", (req, res) => {
    res.sendFile(process.cwd() + "/html/password-generator/style.css");
});*/



routes.post('/login', userControl.store)

module.exports = routes;