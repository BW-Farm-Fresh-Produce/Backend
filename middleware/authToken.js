  module.exports = (req, res, next) => {
      const token = req.heders.authorization;

      if (req.decodedJwt && req.decodedJwt.payload.role) {
          next();
      } else if (token) {
          jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
              // if the token doesn't verify
              if (err) {
                  res.status(401).json({
                      you: err
                  });
                  // if it DOES...
              } else {
                  req.decodedJwt = decodedJwt;
                  next();
              }
          })
      } else {
          res.status(401).json({
              message: 'something went wrong with farm token decryption'
          });
      }


  }