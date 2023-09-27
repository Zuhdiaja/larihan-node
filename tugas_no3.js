const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

 // menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("Server run on port 8000");
 })

 app.get("/convert/:jenis/:value", (req,res) => {
  // menampung data yang dikirimkan
  let value   = Number(req.params.value)
  let value2  = req.params.value
  let jenis   = req.params.jenis
  let response
  
  if (jenis == 'decimal') {
    response = {
        decimal     : value,     
        biner       : value.toString(2),
        octal       : value.toString(8),
        hexadecimal : value.toString(16)   
      }
  res.json(response)
  } else if (jenis  ==  'biner'){
    response = {
      biner       : value2,     
      decimal     : parseInt(value2, 2),
      octal       : parseInt(value2, 8),
      hexadecimal : parseInt(value2, 16)   
    }
  res.json(response)
  } else if (jenis  ==  'octal'){``
    response = {
      octal       : value2,
      decimal     : parseInt(value2, 8),     
      biner       : value.toString(2),
      hexadecimal : value.toString(16)   
    }
  res.json(response)
  } else if (jenis  ==  'hexadecimal'){
    response = {
      hexadecimal : value2 ,
      decimal     : parseInt(value2, 16),     
      biner       : (parseInt(value2, 16).toString(2)).padStart(8, '0'),
      octal       : value2.toString(8)
    }
  res.json(response)
  } else {
    response = {
      eror  : 'salah input'
    }
  res.json(response)
  }
    
  })