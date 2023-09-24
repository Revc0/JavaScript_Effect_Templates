const words = ["apple", "banana", "cherry", "date"];
const input = document.getElementById("autocompleteInput");

input.addEventListener("input", () => {
  const val = input.value;
  const suggestions = words.filter(word => word.startsWith(val));
  
  if (suggestions.length === 1) {
    input.value = suggestions[0];
    input.setSelectionRange(val.length, suggestions[0].length);
  }
});
