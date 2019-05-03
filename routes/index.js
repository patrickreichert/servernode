const express = require('express');
const router = express.Router();

router.get
(
    '/',
    function(req, res)
    {
        res.send('Ciao da exports')
    }
)

module.exports = router