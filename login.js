const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'b4tt3r13s',
    database: 'authBatteries'
});

const authApp = express();

authApp.use(session({
    secret: 'secretkey',
    resave: true, //TODO: auch mit false testen. Unterschied?
    saveUninitialized: true
}));

authApp.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/signUpIn_test.html'));
});

authApp.post('/auth', function (req, res) {
    const email = req.body.email; //name in html
    const password = req.body.password;
    if (email && password) {
        connection.query(
            'SELECT * FROM userAccounts WHERE email = ? AND password = ?',
            [email, password],
            function (error, results, fields) {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.email = email;
                    res.send('login successful');//TODO: wohin?
                } else {
                    res.send('wrong credentials');
                }
                res.end();
            });
    } else  {
    res.send('Please enter e-mail and password');
    res.end();
    }
});

        authApp.listen(port, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log(`Server listening at http://localhost:${port}`);
            }
        });

        authApp.use(bodyParser.urlencoded({extended: true}));
        authApp.use(bodyParser.json());
