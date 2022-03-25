 const jwt = require('jsonwebtoken');

 const generateJWT = (uid = '') => {
     return new Promise((resolve, reject) => {
         let payload = { uid };
         jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
             expiresIn: '4h'
         }, (err, token) => {
             if (err) {
                 console.log(err);
                 reject("can't generate a new token");
             } else {
                 resolve(token);
             }
         });
     });
 }

 module.exports = { generateJWT };