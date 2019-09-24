export function debounce(cb, limit) {
  let wait = false;
  return function() {
    if (!wait) {
      wait = true;
      setTimeout(function() {
        cb.call();
        wait = false;
      }, limit);
    }
  };
}
