import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from './../models/userModel';

export const authenticate = function(req, res, next) {
    const username = req.body.username; 
    const password = req.body.password; 
    
    User.findOne({
        username: username
    })
    .exec()
    .then((user) => {
        if (!user) {
            return res.status(403).send({
                status: 403, 
                message: 'unauthorized'
            });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(403).send({
                    status: 403, 
                    message: 'unauthorized'
                });
            }
            req.user = user;
            console.log(req.user);
            next();
       });
    })
    .catch(e => console.err(e));
}

export const generateToken = function(req, res, next) {
    if (!req.user) res.status(403).send({ status: 403, message: 'unauthorized' });

    const payload = { id: req.user.id };
    const token = jwt.sign(payload, 'my_secret_key', { expiresIn: '1d' }); 
    req.token = token;
    return next();
}

export const respondToken = function(req, res) {
    if (!req.token) res.status(401).send({ status: 401, message: 'unauthorized' });
    return res.status(200).send({
        status: 200, 
        token: req.token
    });

}