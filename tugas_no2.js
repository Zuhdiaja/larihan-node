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

// celcius

app.post("/celcius", (req,res) => {

    let celcius = Number(req.body.celcius)

    let fahrenheit = (celcius*1.8)+32
    let kelvin = celcius+273.15
    let reamur = (celcius-273.15) * (4/5);

    let response = {
        celcius:celcius,
        result: {
        fahrenheit:fahrenheit,
        kelvin:kelvin,
        reamur:reamur
        }}

        res.json(response)
})

// reamur

   app.post("/reamur", (req,res) => {

    let reamur = Number(req.body.reamur)

    let fahrenheit = (reamur*1.8)+32
    let kelvin = (reamur*5/4)+273.15
    let celcius = reamur*5/4;

    let response = {
        reamur:reamur,
        result: {
        fahrenheit:fahrenheit,
        kelvin:kelvin,
        celcius:celcius
        }}

        res.json(response)
})

// kelvin

app.post("/kelvin", (req,res) => {

    let kelvin = Number(req.body.kelvin)

    let fahrenheit = (kelvin*9/5)-459.67
    let reamur = (kelvin-273.15)*4/5
    let celcius = kelvin-273.15;

    let response = {
        kelvin:kelvin,
        result: {
        fahrenheit:fahrenheit,
        reamur:reamur,
        celcius:celcius
        }}

        res.json(response)
})

app.post("/fahrenheit", (req,res) => {

    let fahrenheit = Number(req.body.fahrenheit)

    let kelvin = (fahrenheit+456)*5/9
    let reamur = (fahrenheit-32)*4/9
    let celcius = (fahrenheit-459.67)*5/9;

    let response = {
        fahrenheit:fahrenheit,
        result: {
        kelvin:kelvin,
        reamur:reamur,
        celcius:celcius
        }}

        res.json(response)
})