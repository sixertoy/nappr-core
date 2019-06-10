/*
function debounce(func, wait = 250, immediate = false) {
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
}
*/

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
