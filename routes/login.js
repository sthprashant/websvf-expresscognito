const path = require('path')

const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const userPool = require('../Userpool');




const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.post('/login', (req, res) => {
    console.log(req.body);

    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: req.body.email,
        Password: req.body.password,
    });

    const user = new AmazonCognitoIdentity.CognitoUser({
        Username: req.body.email,
        Pool: userPool,
    });

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            console.log('onSuccess:', data);
            res.redirect('/dashboard');
        },

        onFailure: err =>{
            //alert(JSON.stringify(err));
            console.log('onFailure: ', err);
            res.send(err.message + '<div><a href="/login">go back to login page</a></div>')
        },

        newPasswordRequired: data => {
            console.log('newPasswordRequired', data);
        }
    });
});

module.exports = router;