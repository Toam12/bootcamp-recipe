const moment = require('moment')
const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


[
	{
	  ingredients: ['tomato', 'water'],
	  title: 'Tomato Soup',
	  thumbnail: 'sample.com/image.jpeg',
	  href: 'youtube.com/movie'
	}
  ]

// This route should make a request to the Recipe API
// and send back the data it receives
app.get('/recipes/:ingredient', function (req, res) {
	const ingredient = req.params.ingredient
	urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data) {
		
		const notBuffer = JSON.parse(data) 
		const ingredientData = notBuffer.results.map(r => {return { ingredients:[`${r.ingredients}`] , title:`${r.title}`, thumbnail:`${r.thumbnail}`, href:`${r.href}` }} )

	
		
		res.send(ingredientData)

	})
})

const port = 8080
app.listen(port, function () {
	console.log('good-job')
})