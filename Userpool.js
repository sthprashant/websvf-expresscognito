const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: '',
    ClientId: '',
}

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

module.exports = userPool;


