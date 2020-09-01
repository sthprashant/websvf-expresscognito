const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const loginPage = require('./routes/login')
const signupPage = require('./routes/signup')
const dashboardPage = require('./routes/dashboard')
const logoutPage = require('./routes/logout')

app.use(bodyParser.urlencoded({extended: false}));

//selecting port 
const port = process.env.PORT || 3000;

app.use(dashboardPage);
app.use(loginPage);
app.use(signupPage);
app.use(logoutPage);

//first middleware test
app.get('/', (req, res, next) => {
    console.log('main page is rendered');
    res.render('index', {pageTitle: 'Home WebSVF'});
    //res.sendFile(path.join(__dirname, './', 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404'});
    //res.status(404).sendFile(path.join(__dirname, './', 'views','404' ,'404.html'));
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});