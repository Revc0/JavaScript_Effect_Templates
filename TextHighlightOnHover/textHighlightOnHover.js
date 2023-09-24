const highlightText = document.getElementById('highlightText');

highlightText.addEventListener('mouseover', () => {
  highlightText.style.backgroundColor = 'yellow';
});

highlightText.addEventListener('mouseout', () => {
  highlightText.style.backgroundColor = 'transparent';
});
