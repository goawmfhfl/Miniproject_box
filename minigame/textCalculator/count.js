function counter() {
  let content = document.getElementById('aboutme').value;
  if (content.length > 200) {
    content = content.substring(0, 200);
    document.getElementById('aboutme').value = content;
  }
  document.getElementById('count').innerHTML = `(${content.length}/200)`;
}

counter();
