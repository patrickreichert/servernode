const express = require('express');
const router = express.Router();

router.get
(
    '/',
    function(req, res)
    {
        const query = req.query
        console.log('RES', query)
        let msg = 'Ciao'

        if(query.sesso === 'm')
        {
            //msg = msg + ' bel uomo'
            msg = `${msg} bel uomo`
        }
        if(query.colore)
        {
            msg = `${msg} ${query.colore}`
        }

        res.send(msg)
        
    }
)

module.exports = router