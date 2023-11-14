import consoleLogger from './logger/console';
import elasticSearchLogger from './logger/elasticSearch';
import api from './api';

const services = {
  log: process.env.NODE_ENV === 'dev' ? consoleLogger : elasticSearchLogger,
  api,
};

export default services;
