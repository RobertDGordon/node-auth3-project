
module.exports = (req, res, next, userType) => {
      if (req.user && req.user.type && req.user.type.toLowercase() === userType ){
        next();
      } else {
        return res.status(403).json( { error: 'Incorrect user type!'} )
      }
    
  }