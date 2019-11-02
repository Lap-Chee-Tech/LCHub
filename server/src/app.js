import express from 'express';
import path from 'path';
import apiRouter from './routes/api/api.routes.js';
import mongoose from 'mongoose';
import logger from './config/winston.js';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

const port = process.argv[2] || 8080 || process.env.port; 

// Connect to mongodb 
mongoose.connect('mongodb://admin:admin1234@ds141238.mlab.com:41238/lc_hub', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => logger.info('Connected to mongoDB'))
.catch(err => logger.err(err))


// Primary routes 
app.use((req, res, next) => {
    logger.info(`Incoming ${req.method} to ${req.url}`);
    next();
});

// Mount api routes 
app.use('/api', apiRouter);

const server = app.listen(port, () => {
    logger.info(`Listening to port ${server.address().port}`);
});

module.exports = server;