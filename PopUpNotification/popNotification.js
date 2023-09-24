document.addEventListener("DOMContentLoaded", () => {
    const notification = document.getElementById("notification");
    const closeBtn = document.getElementById("closeNotification");
  
    // Show notification
    setTimeout(() => {
      notification.classList.add("active");
    }, 2000); // Show after 2 seconds
  
    // Close notification
    closeBtn.addEventListener("click", () => {
      notification.classList.remove("active");
    });
  });
  