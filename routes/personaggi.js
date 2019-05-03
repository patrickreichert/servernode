const express = require('express');
const router = express.Router();

//Per questa query
//Chiedi http://localhost:7070/personaggi?sesso=m&colore=rosso
router.get
(
    '/',
    function(req, res)
    {
        
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

//Per questa query
//Chiedi http://localhost:7070/
router.get
(
    '/:id',
    function(req, res)
    {
        const id = req.params.id
        console.log('ID: ', id)
        res.send(`personaggio id: ${id}`)
    }
)
module.exports = router