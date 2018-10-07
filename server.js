const axios = require('axios')
const express = require('express')
const md5 = require('md5')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const {publicKey, privateKey} = require('./secrets.json')

const timestamp = Date.now()

app.use(bodyParser.json())

app.listen(port, () => console.log(`Listening on port ${port}`))

app.post('/marvelapi', (req, res) => {
  axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5(timestamp+privateKey+publicKey)}&nameStartsWith=${req.body.value}`)
  .then(resp=>{
    res.send({
      characters: resp.data.data.results
    });
  })
  .catch((err) => {
    console.error(err)
  });
});
