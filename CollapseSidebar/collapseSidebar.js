document.addEventListener("DOMContentLoaded", () => {
    const toggleSidebar = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");
  
    toggleSidebar.addEventListener("click", () => {
      if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
      } else {
        sidebar.style.width = "250px";
      }
    });
  });
  