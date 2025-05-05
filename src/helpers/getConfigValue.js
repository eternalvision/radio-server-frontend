export const getConfigValue = (key, defaultValue = null) => {
  if (key && typeof window !== 'undefined' && window.config) {
    const val = window.config[key];
    return val != null ? val : defaultValue;
  }
  return defaultValue;
};
