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
                res.sendFile(path.join(__dirname, '../', 'views', 'dashboard.html'));
            }
        )
        .catch(err => {
            console.log('could not find user');
            res.send('<div><a href="/login">Log in</a> to view the dashboard</div>');
        })

    // const user = userPool.getCurrentUser();
    //         if (user) {
    //             user.getSession((err, session) => {
    //                 if (err) {
    //                     console.log('error from login.js getSession');
    //                     console.log(error);
    //                     // reject(err);
    //                 } else {
    //                     console.log('from login.js getSession');
    //                     console.log('session: ',session);
    //                     //
    //                     res.sendFile(path.join(__dirname, '../', 'views', 'dashboard.html'));
    //                 }
    //             })
    //         } else {
    //             console.log('could not find user');
    //             res.send('<div><a href="/login">Log in</a> to view the dashboard</div>');
    //             //reject('could not find user');
    //         }


    // // const user = new AmazonCognitoIdentity.CognitoUser({
    // //     Username: username,
    // //     Pool: userPool,
    // // });

    // if (status.checkStatus()) {
    //    // console.log('hi from dashboard');
    //    //console.log(new AmazonCognitoIdentity.CognitoUser)
    //     //res.sendFile(path.join(__dirname, '../', 'views', 'dashboard.html'));
    // }
    // else {
    //     //console.log(status.checkStatus);
    //     res.send('<div><a href="/login">Log in</a> to view the dashboard</div>');
    // }
});

// console.log('hi from dashboard');
//res.sendFile(path.join(__dirname, '../', 'views', 'dashboard.html'));
module.exports = router;