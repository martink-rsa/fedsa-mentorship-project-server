const chalk = require('chalk');

const log = (() => {
  const info = (...params) => {
    console.log(chalk.blue.bold('Info: \t'), ...params);
  };
  const error = (...params) => {
    console.log(chalk.red.bold('Error: \t'), ...params);
  };
  const success = (...params) => {
    console.log(chalk.green.bold('Success:S'), ...params);
  };
  const warn = (...params) => {
    console.log(chalk.yellow.bold('Warning:'), ...params);
  };

  return Object.assign(
    function () {
      console.log.apply(console, arguments);
    },
    {
      info,
      i: info,
      error,
      e: error,
      success,
      s: success,
      warn,
      w: warn,
    },
  );
})();

module.exports = log;
