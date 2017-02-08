const bcrypt = require('bcryptjs');

function comparePass(userPassword, dbPassword) {
    return bcrypt.compareSync(userPassword, dbPassword);
}

module.exports = {
    comparePass
};
