const express = require('express')
let port = process.argv[3] || 3000
const app = express()

//Mostra la porta
console.log('\n', "Port =", process.env.port) 
//Mostra il percorso dove è installato 'node' e la cartella che contiene il file 'express.js'
console.log('\n', process.argv)
//Mostrami la versione dell'app nal caso scrivessi ' node express.js v ' nel terminale
if(process.argv[2] === 'v')
{
  console.log('\n', 'MyApp versione 0.0.1')
}

app.get
(
  '/',
  function (req, res)
  {
    res.send('Hello World')
  }
)
 
app.listen(port)
console.log('\n', `Server running at http://127.0.0.1:${port}`);