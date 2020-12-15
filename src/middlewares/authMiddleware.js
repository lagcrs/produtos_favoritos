// middleware auth file - authorization
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

module.exports = (req, res, next) => {
    // get token from request headers
    const authHeader = req.headers.authorization;

    // verify if undefined token 
    if (!authHeader) {
        return res.status(401).send({error: 'Not authenticated.' })
    }

    //split token
    const token = authHeader.split(' ')[1];

    let tokenDecoded;
    try {
        // verify if token is valid
        tokenDecoded = jwt.verify(token, authConfig.secret);

    } catch(err) {
        return res.status(500).send({ error: 'Invalid Token' })
    }

    // verify if token not decoded with secret key
    if(!tokenDecoded){
        return res.status(401).send({ error: 'Not authenticated.' })
    }
    req.userId = tokenDecoded.id
    return next();
}