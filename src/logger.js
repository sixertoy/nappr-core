import colors from './colors';

const WS = ' ';
const EOL = '\n';

function trace(msg, method = 'stdout') {
  const useTTY = Boolean(process[method] && process[method].isTTY);
  if (useTTY) process[method].write(`${msg}${EOL}`);
  // eslint-disable-next-line no-console
  else console.log(msg);
}

function buildMessageToTrace(msg, color = false, prefix = false, type = false) {
  const entries = [prefix, type, msg];
  const prefixedMessage = entries.filter(v => v).join(WS);
  if (!color) return prefixedMessage;
  return colors[color](prefixedMessage);
}

const Logger = {
  cloneNS: ns => {
    const clone = Object.keys(Logger).reduce((acc, key) => {
      return { ...acc, [key]: msg => Logger[key](msg, ns) };
    }, {});
    return { ...clone };
  },

  colors,

  // Show a gray colored message
  debug: (msg, prefix = false) => {
    const message = buildMessageToTrace(msg, 'gray', prefix);
    trace(message);
  },

  // Show a red clored message
  // @param {Boolean} throwerror - wheter throw an error catchable by cli
  error: (msg, prefix = false) => {
    const message = buildMessageToTrace(msg, 'red', prefix, 'Error:');
    trace(message, 'stderr');
  },

  // Show a magenta colored message
  info: (msg, prefix = false) => {
    const message = buildMessageToTrace(msg, 'magenta', prefix);
    trace(message);
  },

  // Log a message in console
  log: (msg, prefix = false) => {
    const message = buildMessageToTrace(msg, 'white', prefix);
    trace(message);
  },

  // Show a green colored mesage
  ok: (msg, prefix = false) => {
    const message = buildMessageToTrace(msg, 'green', prefix);
    trace(message);
  },

  warning: (msg, prefix = false) => {
    const message = buildMessageToTrace(msg, 'yellow', prefix, 'Warning:');
    trace(message);
  },
};

export default Logger;
