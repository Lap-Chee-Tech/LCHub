import express from 'express';
import jwt from 'jsonwebtoken';

export const ensureToken = function(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        return next();
    } else {
        return res.status(403).send({
            status: 403,
            message: 'authorization token not set'
        });
    }
}

export const verifyToken = function(req, res, next) {
    jwt.verify(req.token, 'my_secret_key', function(err, data) {
        if (err) res.status(403).send({ status: 403, message: 'invalid token' });
        req.user = data;
        return next();
    });
}