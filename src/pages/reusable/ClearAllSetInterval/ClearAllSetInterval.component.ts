const clearAllSetInterval = () => {
  const interval_id = window.setInterval(function () {}, 0);
  for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }
};

export default clearAllSetInterval;
