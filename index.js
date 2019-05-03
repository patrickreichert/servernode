const express = require('express')
const app = express()
const fs = require('fs')
let port = process.argv[2] || 8080

app.get
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
)

app.listen(port)