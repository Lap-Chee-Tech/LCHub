import winston from 'winston';
import path from 'path';
import fs from 'fs';

const logDir = './src/logs';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log(`Created logs directory (${logDir})`);
};

const { combine, timestamp, label, printf } = winston.format; 

const loggerFormatFile = printf((level, message, timestamp) => {
    return `${timestamp} [${level}] ${message}`;
});

const loggerFormatConsole = printf(info => `[${info.level}] ${info.message}`)
const logger = winston.createLogger({
    level: 'info',
    format: combine(
        winston.format.colorize(), 
        loggerFormatConsole
    ),
    transports: [
        new winston.transports.Console({
            colorize: 'all',
            silent: process.env.NODE_ENV === 'test' 
        }), 
        new winston.transports.File({ filename: path.join(logDir, 'combined.log'), format: combine(timestamp(), loggerFormatFile)}),
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error', format: combine(timestamp(), loggerFormatFile)}), 
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'warn', format: combine(timestamp(), loggerFormatFile)})
    ]
});

const debug = winston.createLogger({
    level: 'debug', 
    format: combine(
        winston.format.colorize(), 
        loggerFormatConsole
    ), 
    transports: [
        new winston.transports.Console({
            colorize: 'all', 
            silent: process.env.NODE_ENV !== 'debug'
        })
    ]
});

export default logger;