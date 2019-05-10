const express = require('express')
const app = express()
//const {settings} = require('./settings')
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID
const uri = "mongodb+srv://username:G4Mohki8@cluster0-oxiar.mongodb.net/servernode?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
const nomeDatabase = "servernode"
const nomeCollection = "personaggi"

client.connect((err) => 
{
  if(err)
  {
    console.log('Error occurred while connecting to MongoDB Atlas...\n', err)
  }
  console.log('Connected...')
  //const collection = client.db(nomeDatabase).collection(nomeCollection);

  //Insert
  const collection = client.db(nomeDatabase).collection(nomeCollection, function (err, collection) {

    const giulio = {nome: 'Giulio', cognome: 'Cesare' };
    collection.insertOne(giulio);

    client.db(nomeDatabase).collection(nomeCollection).countDocuments(function (err, count) {
      if (err) throw err
      {
        console.log('Total rows: ' + count);
      }
    });
  });

  //Read
  client.db(nomeDatabase).collection(nomeCollection).find().toArray(function (err, result) {
    if (err) throw err
    {
      const personaggi = result
      console.log(personaggi)
    }
  });

  //Update
  client.db(nomeDatabase).collection(nomeCollection, function (err, collection) {

    const newOne = { nome: 'Pippo', cognome: 'Stark', vivo: false };

    collection.updateOne({_id:ObjectId("5cd552e9152bf01a58454398")}, { $set: newOne },
    function(err, result) {
      if (err) throw err
      {
        console.log('Document updated successfully');
      }
    });
  });

  //Delete
  client.db(nomeDatabase).collection(nomeCollection).
  remove({_id:ObjectId("5cd552e9152bf01a58454398")}, {w:1}, function(err, result) {
    if(err) throw err
    {
      console.log('Document removed successfully')
    }
  });
  
  //perform action on the collection oject
  client.close();
});

app.use(express.urlencoded({extended: false}))

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
    res.status(404).send('What??? Error 404')
  }
);

app.listen(port)