const Router = require('express').Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require('../config/sercrets.js');

//data model for users

Router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bycrypt.hashSync(user.password, 10);
    user.password = hash;

    //insert db.add(user) function

})

Router.post('login', (req, res) => {
    let { username, password } = req.body;

    // db.findBy(username).then(item => {
    //   if (item && bycrypt.compareSync(password, item[0].password)) {
    //     const token = genToken(item);
    //     res.status(200).json({ username: item[0].username, token: token });
    //   }
    // });
})

function genToken(user) {
    // create the payload...
    const payload = {
        userid: user.id,
        username: user.username,
        role: user.role
    };
    const options = {
        expiresIn: "1h"
    };
    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
}
module.exports = Router;