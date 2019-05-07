const express = require('express')
const app = express()
const {settings} = require('./settings')
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

const myLogger = function (req, res, next)
                 {
                    console.log('LOGGED');
                    next();
                 };
app.use(myLogger)
app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)
app.use('/v0.2/personaggi', personaggi)

app.use
(
  function(req, res)
  {
    res.status(404).send('What???')
  }
);

app.listen(port)

/*app.get
( 
  '/',
  function(req, res)
  {
    res.send('Ciao')
  }
)*/






/* app.get
(
  '/books',
  function(req, res)
  {
    const filename = 'books.json'
    fs.readFile(
                  filename, 
                  function(e, data)
                  {
                    if(e)
                    {
                      //500 -> Internal Server Error
                      return res.sendStatus(500)
                    }

                    try
                    {
                      books = JSON.parse(data)
                    }
                    catch (e)
                    {
                      res.sendStatus(500)
                    }

                    res.json(books)
                  }
               )
  }
)

app.get
(
  '/menu',
  function(req, res)
  {
    const filename = 'menu.js'
    fs.readFile(
                  filename, 
                  function(e, data)
                  {
                    if(e)
                    {
                      //500 -> Internal Server Error
                      return res.sendStatus(500)
                    }

                    try
                    {
                      menu = JSON.parse(data)
                    }
                    catch (e)
                    {
                      res.sendStatus(500)
                    }

                    res.json(menu)
                  }
               )
  }
) */