// import express from 'express' dit is gedaan met commonjs ipv ES modules
// VERANDER DIT TERUG ALS JE IMPORT EN ES MODULES WILT GEBRUIKEN
const express = require('express');

// loading in new library for local JSON
const fs = require('fs');

let rawDataStudenten = fs.readFileSync('squad-a-2022.json');
let jsonStudenten = JSON.parse(rawDataStudenten);

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  response.render('index', jsonStudenten)
})

// routing voor pagina's, jsonStudenten wordt meegegeven als data
app.get('/ervaring0-jaar', (request, response) => {
  console.log(request.query.squad)
  response.render('ervaring0-jaar', jsonStudenten)
})

app.get('/ervaring1-jaar', (request, response) => {
  response.render('ervaring1-jaar', jsonStudenten)
})

app.get('/ervaring2-jaar', (request, response) => {
  response.render('ervaring2-jaar', jsonStudenten)
})

app.get('/ervaring3-jaar', (request, response) => {
  response.render('ervaring3-jaar', jsonStudenten)
})

app.get('/ervaring4-jaar', (request, response) => {
  response.render('ervaring4-jaar', jsonStudenten)
})

app.get('/ervaring5-jaar', (request, response) => {
  response.render('ervaring5-jaar', jsonStudenten)
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})