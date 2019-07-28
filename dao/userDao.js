const User = require('../models/user')

const addUserDao = (userDetails) => {
  return new Promise((resolve, reject) => {
    const user = new User(userDetails)
    user.save(userDetails)
    .then(userResponse => {
      console.log(userResponse)
      resolve(userResponse)
    })
    .catch(userError => {
      reject(userError)
    })
  })
}

module.exports = {
  addUserDao
}