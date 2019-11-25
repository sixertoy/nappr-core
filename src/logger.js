import colors from './colors';

const EOL = '\n';

function trace(msg, method = 'stdout') {
  const useTTY = Boolean(process[method] && process[method].isTTY);
  if (useTTY) process[method].write(`${msg}${EOL}`);
  // eslint-disable-next-line no-console
  else console.log(msg);
}

const Logger = {
  colors,

  // Show a gray colored message
  debug: msg => {
    const colored = colors.gray(msg);
    trace(colored);
  },

  // Show a red clored message
  // @param {Boolean} throwerror - wheter throw an error catchable by cli
  error: msg => {
    const colored = colors.red(`Error: ${msg}`);
    trace(colored, 'stderr');
  },

  // Show a magenta colored message
  info: msg => {
    const colored = colors.magenta(msg);
    trace(colored);
  },

  // Log a message in console
  log: msg => {
    trace(msg);
  },

  // Show a green colored mesage
  ok: msg => {
    const colored = colors.green(msg);
    trace(colored);
  },
  warning: msg => {
    const colored = colors.yellow(`Warning: ${msg}`);
    trace(colored);
  },
};

export default Logger;
