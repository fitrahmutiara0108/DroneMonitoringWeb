const table = document.querySelector(".table-body");
const num_rows = 10;

for (let i = 1; i <= num_rows; i++) {
  const row = document.createElement("div");
  row.classList.add("table-row");
  const isActive = i <= 5;

  const statusButtonColor = isActive ? "#e6ffe3" : "#FFD9DC";
  const statusTextColor = isActive ? "#2ab514" : "#EA3F0B";
  const actionButtonColor = isActive ? "#71a7f2" : "#296DCD";

  row.innerHTML = `
    <span class="table-text">${i}</span>
    <span class="table-text" style="color: rgba(234, 63, 11, 1)" id="column1-text">
      <a href="../admin/flight_detail.html" style="display: inline-block">FN-00000${i}</a>
    </span>
    <span class="table-text" style="color: rgba(234, 63, 11, 1)" id="column2-text">
      <a href="../admin/drone_detail.html" style="display: inline-block">0908765432${i}</a>
    </span>
    <span class="table-text" id="column3-text">Transponder Rockblock</span>
    <span class="table-text" id="column4-text">Probolinggo</span>
    <span class="table-text" id="column5-text">
      <div class="status-button" style="background-color: ${statusButtonColor}">
        <span class="status-text" style="color: ${statusTextColor}">${isActive ? 'Active' : 'Inactive'}</span>
      </div>
    </span>
    <span class="table-text" id="column6-text">
      <div class="action-button" style="background-color: ${actionButtonColor}">
        <svg
          style="color: white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div class="action-button" style="margin-left: 10%">
        <svg
          style="color: white"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074z"
            fill="white"
          ></path>
        </svg>
      </div>
    </span>
  `;

  table.appendChild(row);
}
