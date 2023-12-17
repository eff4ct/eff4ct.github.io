function wd_count(text) {
  const separators = [' ', '.', '?', ',', ';'];
  let count = 0;
  let word_start = false;

  for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (separators.includes(char)) {
          word_start = false;
      } else if (!word_start) {
          count += 1;
          word_start = true;
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