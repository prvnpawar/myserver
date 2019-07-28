const userService = require('../services/userService')

const adduserConroller = (req,res) => {
  const userDetails = req.body
  userService.addUserService(userDetails)
  .then(userResponse => {
    res.json(userResponse)
  })
  .catch(userError => {
    res.json(userError)
  })
}

module.exports = {
  adduserConroller
}