const jwt = require("jsonwebtoken");
const secrets = require('../config/sercrets.js');


const isFarmer = (req, res, next) => {
    const token = req.headers.authorization;
    const body = req.body
    console.log(req.decodedJwt);
    if (req.decodedJwt && req.decodedJwt.role === 'farmer') {
        console.log('hi', req.decodedJwt)
        req.body = {
            ...body,
            farmer_id: req.decodedJwt.uid
        }
        next();
    } else if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
            // if the token doesn't verify
            if (err) {
                res.status(401).json({
                    message: err
                });
                // if it DOES...
            } else {
                req.decodedJwt = decodedJwt;
                console.log('hi1', req.decodedJwt)

                req.body = {
                    ...body,
                    farmer_id: req.decodedJwt.uid
                }
                next();
            }
        })
    } else {
        res.status(401).json({
            message: "User not authorized as farmer"
        });
    }
}

const isConsumer = (req, res, next) => {

}

module.exports = {
    isConsumer,
    isFarmer
}