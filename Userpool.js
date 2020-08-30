const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: 'ap-southeast-2_Te0NecEf9',
    ClientId: '6a9u8csgr2dijjbug816qmmvg3',
}

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

module.exports = userPool;


