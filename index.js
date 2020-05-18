const config = require('./config')

require('./db')({ MONGO_URI: config.MONGO_URI })

require('./server')({
    port: config.PORT,
    cb: () => {
        console.log(`Server is running on port ${config.PORT} `)
    }
})