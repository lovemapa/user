const jwt = require('jsonwebtoken');
const user = require('../models/user')



module.exports = {
    authenticateUser: (req, res, next) => {



        if (req.headers['authorization']) {
            const bearer = req.headers['authorization'].split(' ');
            const token = bearer[1];
            user.findOne({ token: token }).then(result => {
                if (result) {
                    jwt.verify(token, process.env.SIGNATURE, (err, decoded) => {
                        req.userId = decoded.userId
                        next()
                    });
                }
                else return res.json({ message: "User unauthorized", sucess: false })
            })

        } else {
            return res.json({ message: "Headers not provided", sucess: false })

        }
    },
}