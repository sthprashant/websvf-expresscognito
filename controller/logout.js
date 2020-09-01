const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

//app imports
const userPool = require('../Userpool');

const logout = () => {
    const user = userPool.getCurrentUser();

    if(user) {
        user.signOut();
    }
}

module.exports = logout;