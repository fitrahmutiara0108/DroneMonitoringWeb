const table = document.querySelector(".table-body");
const num_rows = 6;

for (let i = 1; i <= num_rows; i++) {
  const row = document.createElement("div");
  row.classList.add("table-row");
  
  const column1Text = `Airnav Admin ${i}`;
  const column2Text = `airnav${i}@gmail.com`;
  const column3Text = "08123456789";
  const column4Text = `Desember ${i}, 2022`;
  
  const actionButtons = `
    <div class="action-button">
      <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" fill="white"></path>
      </svg>
    </div>
    <div class="action-button" style="margin-left: 10%">
      <svg style="color: white" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074z" fill="white"></path>
      </svg>
    </div>
  `;
  
  row.innerHTML = `
    <span class="table-text">${i}</span>
    <span class="table-text" id="column1-text">${column1Text}</span>
    <span class="table-text" id="column2-text">${column2Text}</span>
    <span class="table-text" id="column3-text">${column3Text}</span>
    <span class="table-text" id="column4-text">${column4Text}</span>
    <span class="table-text" id="column5-text">${actionButtons}</span>
  `;

  table.appendChild(row);
}

const flightNumber = `FN-00000${i.toString().padStart(2, "0")}`;
const imei = `0908765432${i.toString().padStart(2, "0")}`;
