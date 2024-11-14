const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

// MVC Pattern
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
// EJS Templates
app.get('/users/debasmita', (req, res) => {
  res.render('user', {
    firstName: 'Debasmita',
    lastName: 'Mohanty',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    email: 'debasmita@gmail.com',
    isPremium: true,
    skills: ['HTML', 'CSS']
  })
})

app.get('/users/pankaj', (req, res) => {
  res.render('user', {
    firstName: 'Pankaj',
    lastName: 'Singh',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    email: 'pankaj@gmail.com',
    isPremium: false,
    skills: ['JavaScript', 'React.js', 'Node.js']
  })
})

app.get('/users/gaurav', (req, res) => {
  res.render('user', {
    firstName: 'Gaurav',
    lastName: 'Tiwari',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    email: 'gaurav@gmail.com',
    isPremium: true,
    skills: ['CSS', 'JavaScript', 'Node.js', 'Python', 'Java']
  })
})

app.listen(3000, () => {
  console.log('Server is running :)')
})
















/*
  # Node.js MVC (Model View Controller) Pattern **
    - Model: Related to the data lying in the DB (Until we learn DB, we are going to use dummy JSON arrays)
    - View: User interface (HTML/template) that is visible to the user
    - Controller: a.k.a 'Handler' - Core entity responsible for processing the incoming request (logic)

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
      - Access variable value
        - <%= firstName %>
      - JS Expression
        - <% expression %>

  # Resources
    - https://media.geeksforgeeks.org/wp-content/uploads/mvc-block-diagram.png
    - https://ejs.co/
*/