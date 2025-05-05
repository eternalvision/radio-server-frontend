const defaultOptions = {
  level: 'log',
  prefix: '[dev]',
  useGroup: false,
};

export const logIfDevelopment = (message, options = defaultOptions) => {
  const { level, prefix, useGroup } = {
    ...defaultOptions,
    ...options,
  };

  const formattedMessage = typeof message === 'string' && prefix ? `${prefix} ${message}` : message;

  const logFn = (() => {
    switch (level) {
      case 'log':
        return console.log;
      case 'info':
        return console.info;
      case 'debug':
        return console.debug;
      case 'warning':
      case 'warn':
        return console.warn;
      case 'error':
        return console.error;
      default:
        return console.log;
    }
  })();

  if (useGroup && typeof formattedMessage === 'object') {
    console.group(prefix ?? '[dev]');
    logFn(formattedMessage);
    console.groupEnd();
  } else {
    logFn(formattedMessage);
  }
};
