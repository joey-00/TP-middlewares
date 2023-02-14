const admins = require('../data/admins.json');
/* const path = require('path'); */

module.exports = (req,res,next) => {
    
    if(admins.includes(req.query.admin)){
        next()
    }
    return res.redirect('/')
}