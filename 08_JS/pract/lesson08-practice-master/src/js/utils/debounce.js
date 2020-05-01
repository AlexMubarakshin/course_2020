/**
 * Debounce
 * 
 * @param {Function} func 
 */
const debounce = (func) => {
  let timeout;
  return () => {
    let context = this;
    let later = () => {
      timeout = null;
      func.apply(context);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, 500);
  };
};

export default debounce;