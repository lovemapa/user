const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


class helperFunction {

    authTokenGenerate(email, userId) {
        return jwt.sign({ email: email, userId: userId },
            process.env.SIGNATURE, { expiresIn: '24h' }
        );
    }

    hashPassword(password) {
        return bcrypt.hashSync(password, 10);
    }

    comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }

}

module.exports = helperFunction



