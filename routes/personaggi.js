const express = require('express');
const router = express.Router();
const characters = require('../data/characters')

// Query
// chiedi, per esempio, http://localhost:8080/v0.1/personaggi?lastname=Stark
router.get
(
  '/', 
  function(req, res, next)
  {
    const query = req.query
    let personaggi = characters.characters
    if ('lastname' in query)
    {
      personaggi = personaggi.filter((personaggio) => {
        return personaggio.lastname === query.lastname
      })
    }
    if ('firstname' in query) 
    {
      personaggi = personaggi.filter((personaggio) => {
        return personaggio.firstname === query.firstname
      })
    }

    res.send(personaggi)
    next();
  },
  function(req, res)
  {
    console.log('FIRE: Il next ha funzionato correttamente')
  }
)

// Params
//http://localhost:7070/personaggi/18
router.get
(
  '/:id',
  function (req, res)
  {
    const parametroID = Number(req.params.id)
    res.json
    ( 
      characters.characters.filter(personaggio => personaggio.id === parametroID)
    )
  }
)

router.post
(
  '/form',
  function (req, res)
  {
    const body = req.body
    const {nome, cognome} = req.body
    console.log(nome, cognome)
    res.send(body)
  }
)

module.exports = router