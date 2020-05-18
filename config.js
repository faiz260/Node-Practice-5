require('dotenv').config()

console.log(process.env.NODE_ENV)

module.exports = {
    PORT: process.env.PORT || 3001,
    NODE_ENV: process.env.NODE_ENV || development,
    MONGO_URI: process.env.MONGO_URI
}