const userPool = require('../Userpool');

const getSession = async () => {
    await new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser();
        if (user) {
            user.getSession((err, session) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(session);
                }
            })
        } else {
            reject('could not find user');
        }
    })

}

module.exports = getSession;