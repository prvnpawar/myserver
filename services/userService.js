const userDao = require('../dao/userDao')

const addUserService = (userDetails) => {
  return new Promise((resolve, reject) => {
    userDao.addUserDao(userDetails)
    .then(userResponse => {
      resolve(userResponse)
    })
    .catch(userError => {
      reject(userError)
    })
  })
}

module.exports = {
  addUserService
}