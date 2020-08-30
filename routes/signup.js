const path = require('path');

global.fetch = require('node-fetch');

const express = require('express');
const userPool = require('../Userpool')


const router = express.Router();


router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'));
});


router.post('/signup', (req, res) => {
    //console.log(req.body);

    var email = req.body.email;
    var password = req.body.password;

    console.log(email);
    console.log(password);

    userPool.signUp(email, password, [], null, (err, data) => {
        if (err)
            {
                console.log(err)
                res.send(err.message + '<div><a href="/signup">go back to signup page</a></div>')
                res.redirect('/signup');
            }
        else{
            console.log(data);
            res.redirect('/dashboard');
        }
    })

    // userPool.signUp(email, password, [],null, (err, data) => {
    //     if(err)
    //         console.error(err);
    //     console.log(data);
    // } );
})

module.exports = router;