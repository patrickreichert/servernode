const express = require('express');
const router = express.Router();

router.get
(
    '/',
    function(req, res)
    {
        //Per questa query
        //Chiedi http://localhost:7070/personaggi?sesso=m&colore=rosso
        const query = req.query
        console.log('RES', query)
        let msg = 'Ciao'
        if(query.key === '7651276512765126')
        {
            msg = `${msg} Mario Rossi`
        
            if(query.sesso === 'm')
            {
                //msg = msg + ' bel uomo'
                msg = `${msg} bel uomo`
            }
            if(query.colore)
            {
                msg = `${msg} ${query.colore}`
            }
        }
        else
        {
            msg = `Utente non autorizzato`
        }

        res.send(msg)
        
    }
)

module.exports = router