const path = require('path');
const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const status = require('../controller/status');
const getSession = require('../controller/getSession');
const userPool = require('../Userpool');

const router = express.Router();


router.get('/dashboard', (req, res) => {

    getSession()
        .then(
            session => {
                console.log('from login.js getSession');
                console.log('session: ', session);
                res.render('dashboard', {pageTitle: 'WebSVF - Dashboard'});
            }
        )
        .catch(err => {
            console.log('could not find user');
            res.send('<div><a href="/login">Log in</a> to view the dashboard</div>');
        })


});

module.exports = router;