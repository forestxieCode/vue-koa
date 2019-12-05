// 创建token
const jwt = require('jsonwebtoken') 

module.exports = function (id) {
  const token = jwt.sign(
    {
      id: id
    },
    'cedric1990',
    {
      expiresIn: 3000
    }
  )

  return token
}