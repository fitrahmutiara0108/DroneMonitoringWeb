window.onclick = function(event) {
  var dropdown = document.getElementById("myDropdown");
  var notifDropdown = document.getElementById("notifDropdown");
  
  // Toggle dropdown for "myDropdown"
  if (event.target.matches(".dropbtn")) {
    dropdown.classList.toggle("show");
  } else if (!event.target.matches(".dropdown-content")) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
  
  // Toggle dropdown for "notifDropdown"
  if (event.target.matches(".notifbtn")) {
    notifDropdown.classList.toggle("show");
  } else if (!event.target.matches(".notif-dropdown-content")) {
    if (notifDropdown.classList.contains("show")) {
      notifDropdown.classList.remove("show");
    }
  }
}
