const wait = (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export default wait;
