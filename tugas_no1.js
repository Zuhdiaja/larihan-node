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

app.listen(8000, () => {
  console.log("Server run on port 8000");
 })


app.post("/tabung", (req,res) => {
  
 
  let diameter  = Number(req.body.diameter) 
  let tinggi    = Number(req.body.tinggi) 
  let jari      = diameter/2
  let volume    = Math.PI * (jari**2) * tinggi
  let luas      = 2 * Math.PI * jari * (jari + tinggi) 
  
  let response = {
  diameter: diameter,
  tinggi: tinggi,
  jari: jari,
  luas: luas,
  volume: volume
  }
  
  res.json(response)
 })

 
app.post("/segitiga", (req,res) => {

 
  let alas      = Number(req.body.alas) 
  let tinggi    = Number(req.body.alas)
  let luas      = 1/2 * alas * tinggi
  
  let response = {
  alas: alas,
  tinggi: tinggi,
  luas: luas

  }
 
  res.json(response)
 })
 
 
app.post("/balok", (req,res) => {
 
  let panjang  = Number(req.body.panjang) 
  let lebar    = Number(req.body.lebar) 
  let tinggi    = Number(req.body.tinggi)

  let volume    = panjang * lebar * tinggi
  let luas      = 2 * ((panjang * lebar)  + (lebar * tinggi)  + (panjang * tinggi))
  let response = {
  panjang   :   panjang,
  tinggi    :   tinggi,
  lebar     :   lebar,
  luas      :   luas,
  volume    :   volume
  }
  res.json(response)
 })