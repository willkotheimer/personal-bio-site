const printToDom = (selector, stringToPrint) => {
  const handle = document.querySelector(selector);
  handle.innerHTML = stringToPrint;
};

export default { printToDom };
