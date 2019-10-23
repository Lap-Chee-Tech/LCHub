// Custom logger 
import winston from 'winston';
import path from 'path';
import fs from 'fs';

// Log directory 
const logDir = './src/logs';

// Check if logs directory exists 
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log(`Created logs directory (${logDir})`);
};

const { combine, timestamp, label, printf } = winston.format; 

// Create custom format for logging to files 
const loggerFormatFile = printf((level, message, timestamp) => {
    return `${timestamp} [${level}] ${message}`;
});

// Create custom format for logging to console
const loggerFormatConsole = printf(info => `[${info.level}] ${info.message}`)

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        winston.format.colorize(), 
        loggerFormatConsole
    ),
    transports: [
        // - Prints all logs to the console 
        new winston.transports.Console({
            colorize: 'all',
            silent: process.env.NODE_ENV === 'test' // - Disable logging during testing 
        }), 
        new winston.transports.File({ filename: path.join(logDir, 'combined.log'), format: combine(timestamp(), loggerFormatFile)}),
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error', format: combine(timestamp(), loggerFormatFile)}), 
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'warn', format: combine(timestamp(), loggerFormatFile)})
    ]
});

// Debugging console 
const debug = winston.createLogger({
    level: 'debug', 
    format: combine(
        winston.format.colorize(), 
        loggerFormatConsole
    ), 
    transports: [
        // - Print all logs to the console 
        new winston.transports.Console({
            colorize: 'all', 
            silent: process.env.NODE_ENV !== 'debug'
        })
    ]
});

export default logger;