const HackAllText = () => {
  const arr = gatherVisibleTextElements();
  const letters = "abcdefghijklmnopqrstuvwxyz";

  arr.forEach((element) => {
    const value = element.textContent;
    if (value) {
      const iterationValue = 0;
      let iteration = 0;
      let interval;
      clearInterval(interval);
      interval = setInterval(() => {
        element.textContent = element.textContent.trim()
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        if (iteration >= value.length) {
          clearInterval(interval);
        }
        iteration += iterationValue;
      }, 30);
    }
  });
}

function gatherVisibleTextElements() {
  const paragraphsAndHeaders = Array.from(document.querySelectorAll('span, a, p, h1, h2, h3, h4, h5, h6'));
  const visibleParagraphsAndHeaders = paragraphsAndHeaders.filter((element) => {
    return element.textContent.trim().length > 0 &&
      element.getBoundingClientRect().height > 0 &&
      element.getBoundingClientRect().width > 0;
  });
  return visibleParagraphsAndHeaders;
}

function HackMainframe() {
  const text = document.createElement('div');
  text.innerHTML = 'hacking mainframe...';
  text.style.color = 'red';
  text.style.fontWeight = 'bold';
  text.style.position = 'absolute';
  text.style.fontSize = '30px';
  document.body.appendChild(text);

  function moveText() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    text.style.left = `${x}px`;
    text.style.top = `${y}px`;
  }

  setInterval(moveText, 1000);
}

HackAllText();
HackMainframe();
