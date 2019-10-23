import express from 'express';
import path from 'path';
import apiRouter from './routes/api/api.routes.js';
import logger from './config/winston.js';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

const port = process.argv[2] || 8080 || process.env.port; 

// Primary routes 
app.use((req, res, next) => {
    logger.info(`Incoming ${req.method} to ${req.url}`);
    next();
});

// Mount api routes 
app.use('/api', apiRouter);

const server = app.listen(port, () => {
    console.log(`Listening to port ${server.address().port}`);
});

module.exports = server;