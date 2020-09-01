const getSession = require('./getSession');
var currentStatus = false;


const checkStatus = () => {

    getSession()
        .then(session => {
            console.log('reached status.js getSession()');
            console.log(session);
            currentStatus = true;
            console.log(currentStatus);
            return currentStatus;
        })
        .catch((err) => {
            console.log('reached status.js getSession() error');
            console.log(err)
        })
        console.log(currentStatus);
    return currentStatus;
}

const setStatus = (value) => {
    currentStatus = value;
}

module.exports = {
    checkStatus: checkStatus,
    setStatus: setStatus,
}




