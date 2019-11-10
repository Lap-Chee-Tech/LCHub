import mongoose from 'mongoose';
import logger from './../config/winston';
import User from './../models/userModel';

export const getUser = function(req, res) {
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
    let name = req.params.name; 
    let uid = req.params.uid; 
    User.find({
        uid: uid
    }, function(err, docs) {
        if (err) {
            throw new Error(err);
        } 
        if (docs.length === 0) {
            const user = new User({
                name: name, 
                room_no: 1000, 
                uid: uid
            });
            user.save()
                .then(() => res.status(200).send('User added!'))
                .catch(err => res.status(404).send(err))
        } else {
            res.status(404).send('User already exists!')
        }
    });
} 
