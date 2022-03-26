import winston from "winston";
import moment from "moment";

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { "timestamp": moment.utc().format() },
  transports: [
    new winston.transports.File({
      filename: __dirname + '/../../logs/error.log', level: 'error'
    })
  ]
});

const isDevelopment = process.env.NODE_ENV == "dev";
if (isDevelopment) {
  logger.add(new winston.transports.Console({ level: 'debug' }));
}



export default logger;