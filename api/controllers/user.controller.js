import User from  '../models/user.models.js'

export const test = (req,res)=> {
    const { username, email, password } = req.body;
    const newUser = new User ({username, email, password});
};