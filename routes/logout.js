const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const userPool = require('../Userpool');

const router = express.Router();


router.get('/logout', (req,res) => {
    const user = userPool.getCurrentUser();

    if(user) {
        console.log('about to sign out');
        user.signOut();}
       // user.signOut();}
    console.log('user has been logged out');
    res.redirect('/');

});


module.exports = router;