const path = require('path');
global.fetch = require('node-fetch');
const express = require('express');

const userPool = require('../Userpool');
const { setStatus } = require('../controller/status');
const authenticate = require('../controller/authenticate');


const router = express.Router();

//GET
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'));
});


//POST 
router.post('/signup', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    console.log(email);
    console.log(password);

    userPool.signUp(email, password, [], null, (err, data) => {
        // if (err) {
        //     console.log(err)
        //     res.send(err.message + '<div><a href="/signup">return to Signup</a></div>')
        //     res.redirect('/signup');
        // }
       // else {
            console.log(data+'\n signup else');
            var auth = authenticate(email, password)
        .then(data => {
            console.log('redirecting user to Dashboard');
            //status.checkStatus();
            res.redirect('/dashboard');
        }).catch(err => {
            if(err.code == 'UserNotConfirmedException'){
            res.send(err.message + '<div>Please check your email for verfication link then <a href="/login">Try Logging in Again</a></div>');
            }
            console.log(err);
            res.send(err.message + '<div><a href="/login">Try Logging in Again</a></div>');
        });

    console.log(auth);
        //}
    });
});


module.exports = router;