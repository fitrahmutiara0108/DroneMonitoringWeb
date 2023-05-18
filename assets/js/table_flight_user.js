const table = document.querySelector(".table-body");
const num_rows = 10;

for (let i = 1; i <= num_rows; i++) {
  const row = document.createElement("div");
  row.classList.add("table-row");
  row.innerHTML = `
    <span class="table-text">${i}</span>
    <span class="table-text" style="color: rgba(234, 63, 11, 1)" id="column1-text">
      <a href="../user/flight_detail.html" style="display: inline-block">FN-00000${i.toString().padStart(2, "0")}</a>
    </span>
    <span class="table-text" style="color: rgba(234, 63, 11, 1)" id="column2-text">
      <a href="../user/drone_detail.html" style="display: inline-block">0908765432${i.toString().padStart(2, "0")}</a>
    </span>
    <span class="table-text" id="column3-text">Transponder ${i <= 5 ? "Rockblock" : "BeeLine"}</span>
    <span class="table-text" id="column4-text">${i <= 5 ? "Probolinggo" : "Pelabuhan Gili Ketapang"}</span>
    <span class="table-text" id="column5-text">${i <= 5 ? "Pelabuhan Gili Ketapang" : "Probolinggo"}</span>
    <span class="table-text" id="column6-text">
      <div class="status-button" style="background-color: ${i <= 5 ? "#e6ffe3" : "#FFD9DC"}">
        <span class="status-text" style="color: ${i <= 5 ? "#2ab514" : "#EA3F0B"}">${i <= 5 ? "Active" : "Inactive"}</span>
      </div>
    </span>
  `;

  table.appendChild(row);
}

