function debounce(func, wait = 250, immediate = false) {
  let timeout;
  return function __debounce__(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    }, wait);
    if (immediate && !timeout) func.apply(this, [...args]);
  };
}

export default debounce;
