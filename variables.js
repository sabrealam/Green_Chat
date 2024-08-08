const dotenv = require('dotenv');
dotenv.config();

module.exports= {
    mongoURI: process.env.MONGO_URI,
    port : process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
    node_env: process.env.NODE_ENV

}

 