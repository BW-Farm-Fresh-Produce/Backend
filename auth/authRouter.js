const Router = require('express').Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require('../config/sercrets.js');

//data model for users
const userModel = require('../database/models/userModel.js');

Router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bycrypt.hashSync(user.password, 10);
    user.password = hash;

    if (user.role !== 'farmer') {
        userModel.addUser(user)
            .then(users => {
                res.status(201).json({ users, message: `Successfully created user: ${user.username} the ${user.role}` })
            })
            .catch(err => {
                res.status(500).json({
                    err,
                    message: 'serverr error, failed to create user'
                });
            })
    } else {
        (user.location && user.farm_name)
            ?
            userModel.addUser(user)
                .then(users => {
                    res.status(201).json({ users, message: `Successfully created user: ${user.username} the ${user.role}` })
                })
                .catch(err => {
                    res.status(500).json({
                        err,
                        message: 'serverr error, failed to create user'
                    });
                })
            :
            res.status(400).json({ message: "bad request" })

    }
});

Router.get('/users', (req,res) => {
    userModel.find()
    .then(users => {
        res.status(200).json({users,message:"success"});
    })
    .catch(err => {
        res.status(500).json({err, message:"server error"})
    })
})

Router.post('/login', (req, res) => {
    let { username, password } = req.body;
    console.log(req.body)
    // console.log(userModel.findByUser(username))
    userModel.findByUser(username).then(item => {
        if (item && bycrypt.compareSync(password, item[0].password)) {
            const token = genToken(item[0]);
            res.status(200).json({ username: item[0].username, token: token });
        }
    })
        .catch(err => {
            res.status(500).json({ err, message: "Server issue" });
        });
})

function genToken(user) {
    // create the payload...
    const payload = {
        uid: user.farmer_id,
        username: user.username,
        role: user.role
    };

    const options = {
        expiresIn: "3h"
    };

    const token = jwt.sign(payload, secrets.jwtSecret, options);
    console.log(token);
    return token;
}
module.exports = Router;