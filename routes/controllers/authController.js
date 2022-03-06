const User = require('../models/user');

// Register a user => /signup
exports.registerUser = async(req,res,next)=>{
    const {fullname, username, email, password} = req.body;
    // console.log(req.body);
    const user = await User.create({
        fullname,
        username,
        email,
        password
    })
    res.status(201).render('index');
}