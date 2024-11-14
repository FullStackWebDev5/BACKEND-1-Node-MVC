const USERS = []

const getUsers = () => {
  return USERS
}

const checkUserEmailExist = (email) => {
  return USERS.find(u => u.email == email)
}

const checkUserExist = (email, password) => {
  return USERS.find(u => u.email == email && u.password == password)
}

const addUser = (newUser) => {
  USERS.push(newUser)
}

module.exports = {
  getUsers,
  checkUserEmailExist,
  checkUserExist,
  addUser
}