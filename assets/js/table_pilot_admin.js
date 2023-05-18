const table = document.querySelector(".table-body");
const num_rows = 6;

for (let i = 1; i <= 3; i++) {
  const row = createTableRow(i, "Fabio Quartararo", "12345678", "08123456789", "#296dcd", "#2ab514", "#e6ffe3", "Valid");
  table.appendChild(row);
}

for (let i = 4; i <= num_rows; i++) {
  const row = createTableRow(i, "Shawn Mendes", "98765432", "081911122233", "#296dcd", "#EA3F0B", "#FFD9DC", "Expired");
  table.appendChild(row);
}

function createTableRow(index, name, flightNumber, imei, buttonColor1, buttonColor2, statusColor, status) {
  const row = document.createElement("div");
  row.classList.add("table-row");
  row.innerHTML = `
    <span class="table-text">${index}</span>
    <span class="table-text" id="column1-text">${name}</span>
    <span class="table-text" id="column2-text">${flightNumber}</span>
    <span class="table-text" id="column3-text">${imei}</span>
    <span class="table-text" id="column4-text">
      <div class="pilot-button">
        <svg
          style="color: ${buttonColor1}"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-eye"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            fill="#296dcd"
          ></path>
          <path
            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            fill="#296dcd"
          ></path>
        </svg>
        <span style="margin-left: 5%"> See File </span>
      </div>
    </span>
    <span class="table-text" id="column5-text">
    <div class="pilot-button">
      <svg
        style="color: ${buttonColor1}"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        class="bi bi-eye"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
          fill="#296dcd"
        ></path>
        <path
          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
          fill="#296dcd"
        ></path>
      </svg>
      <span style="margin-left: 5%"> See File </span>
    </div>
  </span>
    <span class="table-text" id="column6-text">
      <div class="status-button" style="background-color: ${statusColor}">
        <span class="status-text" style="color: ${buttonColor2}">${status}</span>
      </div>
    </span>
  `;

  return row;
}