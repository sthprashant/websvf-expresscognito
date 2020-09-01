const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

//app imports
const userPool = require('../Userpool');

const authenticate = async (username, password) => {
    await new Promise((resolve, reject) => {
        const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: username,
            Password: password,
        });

        const user = new AmazonCognitoIdentity.CognitoUser({
            Username: username,
            Pool: userPool,
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess:', data);
                resolve(data);
                //res.redirect('/dashboard');
            },

            onFailure: err => {
                //alert(JSON.stringify(err));
                console.log('onFailure: ', err);
                reject(err);
                //res.send(err.message + '<div><a href="/login">Try Logging in Again</a></div>')
            },

            newPasswordRequired: data => {
                console.log('newPasswordRequired', data);
                resolve(data);
            }
        });
    });
}

module.exports = authenticate