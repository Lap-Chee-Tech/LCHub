import logger from './../config/winston';
import User from './../models/userModel';

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
