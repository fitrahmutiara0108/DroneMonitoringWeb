// JS Checkbox date
function showTime(id) {
    const checkbox = document.getElementById(id);
    const time = document.getElementById(`time-${id}`);
    if (checkbox.checked) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      time.textContent = currentTime;
    } else {
      time.textContent = "-";
    }
  }

//   JS untuk disable checkbox kl blm pilih yg sebelumnya sampe task15 
  function enableCheckboxes(start, end) {
    var startIndex = parseInt(start.replace("checkbox-", ""));
    var endIndex = parseInt(end.replace("checkbox-", ""));

    var prevCheckbox = null;
    for (var i = startIndex; i <= endIndex; i++) {
      var checkbox = document.getElementById("checkbox-" + i);
      if (prevCheckbox == null || prevCheckbox.checked) {
        checkbox.removeAttribute("disabled");
      } else {
        checkbox.setAttribute("disabled", true);
      }
      prevCheckbox = checkbox;
    }
  }