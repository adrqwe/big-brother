const clearAllSetInterval = () => {
  const interval_id = window.setInterval(function () {}, 0);
  const timeout_id = window.setTimeout(function () {}, 0);
  for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }
  for (let i = 1; i < timeout_id; i++) {
    window.clearTimeout(i);
  }
};

export default clearAllSetInterval;
