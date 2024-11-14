const path = require('path')

const {
  getUsers,
  checkUserEmailExist,
  checkUserExist,
  addUser
} = require('../models/user.js')

const displayLandingPage = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/landing-page.html'))
}

const getUsersData = (req, res) => {
  res.json(getUsers())
}

const displaySignupPage = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/signup.html'))
}

const displayLoginPage = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/login.html'))
}

const displayDashboardPage = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/dashboard.html'))
}

const signupUser = (req, res) => {
  const { name, email, password } = req.body
  const user = checkUserEmailExist(email)
  if(user) {
    return res.send('A user with this email already exists!')
  }
  const newUser = { name, email, password }
  addUser(newUser)
  res.redirect('/dashboard')
}

const loginUser = (req, res) => {
  const { email, password } = req.body
  const user = checkUserExist(email, password)
  if(user) {
    res.redirect('/dashboard')
  } else {
    res.send('Invalid email or password. Please try again!')
  }
}

module.exports = {
  displayLandingPage,
  getUsersData,
  displaySignupPage,
  displayLoginPage,
  displayDashboardPage,
  signupUser,
  loginUser
}