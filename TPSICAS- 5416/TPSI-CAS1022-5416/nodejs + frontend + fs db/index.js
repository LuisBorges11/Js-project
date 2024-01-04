const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json());

app.get('/car-list', function (req, res) {
  res.send([{"make":"Honda","model":"Pilot","year":2007},
  {"make":"Honda","model":"Fit","year":2008},
  {"make":"Mazda","model":"626","year":2000},
  {"make":"Infiniti","model":"Q","year":2004},
  {"make":"Chevrolet","model":"Express 2500","year":2008},
  {"make":"Toyota","model":"Venza","year":2009},
  {"make":"Maserati","model":"Quattroporte","year":1985},
  {"make":"Toyota","model":"Sequoia","year":2003},
  {"make":"Suzuki","model":"XL-7","year":2004},
  {"make":"GMC","model":"Yukon XL 1500","year":2004},
  {"make":"Suzuki","model":"Swift","year":1987},
  {"make":"Isuzu","model":"Ascender","year":2005},
  {"make":"Toyota","model":"Camry","year":2003},
  {"make":"Acura","model":"Legend","year":1987},
  {"make":"Pontiac","model":"Safari","year":1987},
  {"make":"Austin","model":"Mini","year":1963}])
})

app.listen(3000)




// const printer = function(){
//     console.log('hello world!')
// };

// printer()