const log = (message: string, level: string): void => {
  console.log('Sending a message to Elastic Search', message, level);
};

export default log;
