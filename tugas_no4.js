const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("Server run on port 8000");
})

app.post('/bmi', (req, res) => {

  let tinggi = Number(req.body.tinggi)
  let berat = Number(req.body.berat)
  let tinggi2 = tinggi/100
  let bmi = berat / (tinggi2**2)
  let response;
  if (bmi >= 30) {
    response = {
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: 'kegemukan (Obesitas)'
    }
    res.json(response)
  } else if (bmi >= 25) {
    response = {
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: 'kelebihan berat badan'
    }
    res.json(response)
  } else if (bmi >= 18.5) {
    response = {
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: 'Normal (Ideal)'
    }
    res.json(response)
  } else {
    response = {
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: 'kekurangan berat badan'
    }
    res.json(response)
  }
})