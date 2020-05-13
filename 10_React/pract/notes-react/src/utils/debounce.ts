
const debounce = (func: () => void) => {
  let timeout: NodeJS.Timeout | null;
  return () => {
    // @ts-ignore
    let context = this;
    let later = () => {
      timeout = null;
      func.apply(context);
    };
    clearTimeout(timeout!);
    timeout = setTimeout(later, 500);
  };
};

export default debounce;
