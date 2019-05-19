const debounce = (func, wait = 250, immediate = false) => {
  let timeout;
  return (...args) => {
    const context = this;
    const debounced = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const shouldCallNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(debounced, wait);
    if (shouldCallNow) func.apply(context, args);
  };
};

export default debounce;
