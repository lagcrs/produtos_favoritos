// auth config file
module.exports = {
    // Save private and public key of dotenv with expires time and jwt algorithm
    "privateKey": process.env.JWT_PRIVATE_KEY,
    "publicKey": process.env.JWT_PUBLIC_KEY,
    "expiresIn": 3600,
    "algorithm": 'RS256'
}