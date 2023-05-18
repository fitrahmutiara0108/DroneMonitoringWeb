const table = document.querySelector(".table-body");
const num_rows = 6;

for (let i = 1; i <= 3; i++) {
  const row = document.createElement("div");
  row.classList.add("table-row");
  row.innerHTML = `
    <span class="table-text">${i}</span>
    <span class="table-text" id="column1-text">Beehive Drone ${i}</span>
    <span class="table-text" id="column2-text">drone${i}@gmail.com</span>
    <span class="table-text" id="column3-text">08123456789</span>
    <span class="table-text" id="column4-text">
    <div class="pilot-button">
    <svg
      style="color: rgb(41, 109, 205)"
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
      style="color: rgb(41, 109, 205)"
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
    <div class="status-button" style="background-color: #e6ffe3">
      <span class="status-text" style="color: #2ab514">Verified</span>
    </div>
    </span>
    <span class="table-text" id="column7-text">
    <div class="action-button" style="background-color: #71a7f2">
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

for (let i = 4; i <= num_rows; i++) {
  const row = document.createElement("div");
  row.classList.add("table-row");
  row.innerHTML = `
  <span class="table-text">${i}</span>
  <span class="table-text" id="column1-text">Beehive Drone ${i}</span>
  <span class="table-text" id="column2-text">drone${i}@gmail.com</span>
  <span class="table-text" id="column3-text">081911122233</span>
  <span class="table-text" id="column4-text">
  <div class="pilot-button">
  <svg
    style="color: rgb(41, 109, 205)"
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
    style="color: rgb(41, 109, 205)"
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
  <div class="status-button" style="background-color: #FFD9DC">
  <span class="status-text" style="color: #EA3F0B">Unverified</span>
  </div>
  </span>
  <span class="table-text" id="column7-text">
  <div class="action-button">
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

const flightNumber = `FN-00000${i.toString().padStart(2, "0")}`;
const imei = `0908765432${i.toString().padStart(2, "0")}`;