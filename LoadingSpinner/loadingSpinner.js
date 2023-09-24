// Simulate loading data and hide the loader after that
document.getElementById("loader").style.display = "block";

setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 3000);
