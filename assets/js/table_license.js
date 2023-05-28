const table = document.querySelector(".table-body");
const num_rows = 9;

for (let i = 1; i <= num_rows; i++) {
  const row = document.createElement("div");
  row.classList.add("table-row");

  const username = i >= 6 && i <= 9 ? "PT Drone 123" : "Beehive Drones";

  row.innerHTML = `
    <span class="table-text">${i}</span>
    <span class="table-text" style="color: rgba(234, 63, 11, 1)" id="column1-text">
      <a href="license_detail.html" style="display: inline-block">LI-00000${i}</a>
    </span>
    <span class="table-text" id="column2-text">0908765432${i}
    </span>
    <span class="table-text" id="column3-text">Transponder BeeLine</span>
    <span class="table-text" id="column4-text">Drone ABCDEFG</span>
    <span class="table-text" id="column5-text">${username}</span>
    <span class="table-text" id="column6-text">2${i}-05-2023</span>
  `;

  table.appendChild(row);
}
