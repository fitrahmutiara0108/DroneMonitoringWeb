const columnToggleBtn = document.getElementById("column-toggle-btn");
const dropdownColumns = document.querySelector(".dropdown-columns");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const columnToggleWrapper = document.querySelector(".column-toggle-wrapper");

columnToggleBtn.addEventListener("click", () => {
  dropdownColumns.classList.toggle("show");
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const column = checkbox.value;
    const index = column.replace("column", "");
    const header = document.getElementById(`column${index}`);
    const rows = document.querySelectorAll(`#column${index}-text`);
    header.style.display = checkbox.checked ? "table-cell" : "none";
    rows.forEach((row) => {
      row.style.display = checkbox.checked ? "table-cell" : "none";
    });
  });
});

document.addEventListener("click", (event) => {
  if (
    !dropdownColumns.contains(event.target) &&
    event.target !== columnToggleBtn &&
    !columnToggleBtn.contains(event.target)
  ) {
    dropdownColumns.classList.remove("show");
  }
});
