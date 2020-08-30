const path = require('path');
const express = require('express');

const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'dashboard.html'));
});

module.exports = router;