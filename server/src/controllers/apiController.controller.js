import mongoose from 'mongoose';
import logger from './../config/winston';
import User from './../models/userModel';
import jwt from 'jsonwebtoken';

export const getUser = function(req, res, next) {
    let uid = req.params.uid; 
    User.find({
        uid: uid
    }, function(err, docs) {
        if (err) {
            res.status(404).send('Oops! Something went wrong!');
            throw new Error(err);
        } 
        if (docs.length > 0) {
            res.status(200).send(docs);
        } else {
            res.status(404).send(`No user found for uid ${uid}`);
        }
    });
}

export const addUser = function(req, res) {
    User.findOne({
        username: req.body.username
    })
    .exec()
    .then((user) => {
        if (user) {
            return res.status(404).send({
                status: 404, 
                message: 'User exists!'
            });
        } else {
            User.create({
                username: req.body.username, 
                password: req.body.password
            })
            .then((savedUser) => {
                return res.status(200).send(savedUser);
            })
            .catch(err => res.status(404).send({ status: 404, message: err }));
        }
    })
    .catch(err => res.status(404).send({ status: 404, message: err }))
} 


export const authenticate = function(req, res, next) {
    const username = req.body.username; 
    const password = req.body.password; 
    
    User.findOne({
        username: username
    })
    .exec()
    .then((user) => {
        if (!user) {
            return res.status(401).send({
                status: 401, 
                message: 'unauthorized'
            });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).send({
                    status: 401, 
                    message: 'unauthorized'
                });
            }
            req.user = user;
            next();
       });
    })
    .catch(e => console.err(e));
}

export const generateToken = function(req, res, next) {
    if (!req.user) res.status(401).send({ status: 401, message: 'unauthorized' });

    const payload = { id: req.user.id };
    const token = jwt.sign(payload, 'my_secret_key', { expiresIn: '1d' }); 
    req.token = token;
    next();
}

export const respondToken = function(req, res) {
    if (!req.token) res.status(401).send({ status: 401, message: 'unauthorized' });

    res.status(200).send({
        status: 200, 
        token: req.token
    });

}