function wd_count(text) {
  const ponctuation = [' ', '.', '?', ',', ';', ':', '!', '*'];
  let count = 0;
  let start = false;

  for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (ponctuation.includes(char)) {
          start = false;
      } else if (!start) {
          count += 1;
          start = true;
      }
  }

  return count;
}

function number() {
  const text = document.getElementById('text').value;
  const count = wd_count(text);
  const resultelement = document.getElementById('result');
  resultelement.innerHTML = `Number of words: ${count}`;
}