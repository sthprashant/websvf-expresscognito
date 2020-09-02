const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const loginPage = require('./routes/login')
const signupPage = require('./routes/signup')
const dashboardPage = require('./routes/dashboard')
const logoutPage = require('./routes/logout')
const getSession = require('./controller/getSession');
const userPool = require('./Userpool');

app.use(bodyParser.urlencoded({ extended: false }));

//selecting port 
const port = process.env.PORT || 3000;

app.use(dashboardPage);
app.use(loginPage);
app.use(signupPage);
app.use(logoutPage);

//first middleware test
app.get('/', (req, res, next) => {

    getSession()
        .then(
            session => {
                console.log('page / : user logged in');
                res.render('index', { pageTitle: 'WebSVF - Home', logOnStatus: 'true' });
            }
        )
        .catch(err => {
            console.log('could not find user');
            res.render('index', { pageTitle: 'WebSVF - Home', logOnStatus: 'false' });
        })
});

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404', logOnStatus: 'false' });
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});