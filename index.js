import express from 'express'

const url = 'https://whois.fdnd.nl/api/v1/squad/squad-b-2022'
const url2 = './squad-a-2022.json'
const data = await fetch(url)
const data2 = await fetch(url2)
  .then((response) => response.json())
  .catch((error) => error)

console.log(data)

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  console.log(request.query.squad)

  response.render('index', data && data2)
})


app.get('/test', (request, response) => {
    console.log(request.query.squad)
  
    response.render('test')
  })

// app.get('/members', (request, response) => {
//   response.send('Joepie!!')
// })

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})