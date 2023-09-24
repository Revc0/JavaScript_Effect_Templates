document.getElementById("copyBtn").addEventListener("click", () => {
    const textToCopy = document.getElementById("textToCopy");
    textToCopy.select();
    document.execCommand("copy");
  });
  