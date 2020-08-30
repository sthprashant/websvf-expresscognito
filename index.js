const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginPage = require('./routes/login')
const signupPage = require('./routes/signup')
const dashboardPage = require('./routes/dashboard')

app.use(bodyParser.urlencoded({extended: false}));

//selecting port 
const port = process.env.PORT || 3000;

app.use(dashboardPage);
app.use(loginPage);
app.use(signupPage);

//first middleware test
app.get('/', (req, res, next) => {
    console.log('main page is rendered');

    res.sendFile(path.join(__dirname, './', 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page could not found</h1>')
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});