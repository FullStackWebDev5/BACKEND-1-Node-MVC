const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const {
  displayLandingPage,
  getUsersData,
  displaySignupPage,
  displayLoginPage,
  displayDashboardPage,
  signupUser,
  loginUser
} = require('./src/controllers/user')

const app = express()
app.use(bodyParser.urlencoded())
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', displayLandingPage)

app.get('/users', getUsersData)

app.get('/signup', displaySignupPage)

app.get('/login', displayLoginPage)

app.get('/dashboard', displayDashboardPage)

app.post('/users/signup', signupUser)

app.post('/users/login', loginUser)

/* ------------- */
app.get('/users/debasmita', (req, res) => {
  res.render('user', {
    firstName: 'Debasmita',
    lastName: 'Mohanty'
  })
})

app.get('/users/pankaj', (req, res) => {
  res.render('user', {
    firstName: 'Pankaj',
    lastName: 'Singh'
  })
})

app.listen(3000, () => {
  console.log('Server is running :)')
})
















/*
  # Node.js MVC (Model View Controller) Pattern **
    - Model: Related to the data lying in the DB (Until we learn DB, we are going to use dummy JSON arrays)
    - View: User interface (HTML/template) that is visible to the user
    - Controller: a.k.a 'Handler' - Core entity esponsible for processing the incoming request

    - Parent folder 'src': Source
      - models
      - controllers
      - views

  # Microservices:
    - Monolithic services: One server, One DB
    - Microservices: Multiple servers, Multiple DBs
    - Advantages:
      - Entire server doesn't go down if a single service goes down
      - Load can be handled better

  # Template Engines *:
    - Helps create template for rendering dynamic pages
    - Examples: EJS, Pub.js, Dot.js, Handlebars etc.
    - EJS: Embedded JavaScript templating
    - Steps:
      - Create a template with .ejs extension
        - Use ejs syntaxes wherever applicable
      - Use res.render method in the server file to return these templates
    - Syntaxes:
      - Use variable
        - <%= firstName %>

  # Resources
    - https://media.geeksforgeeks.org/wp-content/uploads/mvc-block-diagram.png
    - https://ejs.co/
*/