const path = require('path')

const express = require('express');

const userPool = require('../Userpool');
const authenticate = require('../controller/authenticate');
const status = require('../controller/status');
const getSession = require('../controller/getSession');

const router = express.Router();


//GET
router.get('/login', (req, res) => {

    getSession()
        .then(
            session => {
                console.log('from login.js getSession');
                console.log('session: ', session);
                res.render('login', { pageTitle: 'WebSVF - Login', logOnStatus: 'true' });
            }
        )
        .catch(err => {
            console.log('could not find user');
            res.render('login', { pageTitle: 'WebSVF - Login', logOnStatus: 'false' });
        })

    // res.render('dashboard', { pageTitle: 'WebSVF - Dashboard', logOnStatus: 'false' });
});


//POST
router.post('/login', (req, res) => {
    var auth = authenticate(req.body.email, req.body.password)
        .then(data => {
            console.log('redirecting user to Dashboard');
            //status.checkStatus();
            const user = userPool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        console.log('error from login.js getSession');
                        console.log(error);
                        // reject(err);
                    } else {
                        console.log('from login.js getSession');
                        console.log('session: ', session);
                        //
                    }
                })
            } else {
                console.log('could not find user');
                //reject('could not find user');
            }
            res.redirect('/dashboard');
        }).catch(err => {
            console.log(err);
            res.send(err.message + '<div><a href="/login">Try Logging in Again</a></div>');
        });

    console.log(auth);
});

module.exports = router;