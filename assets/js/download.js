function exportToExcel() {
    const table = document.querySelector('.table');
    const rows = table.querySelectorAll('.table-row');
    let csvContent = "data:text/csv;charset=utf-8,";
  
    // Add headers to CSV
    const headers = ["No", "Flight Number", "Imei", "Transponder Name", "Origin", "Destination", "Status"];
    csvContent += headers.join(",") + "\n";
  
    // Add rows to CSV
    rows.forEach(row => {
      const rowData = [];
      const columns = row.querySelectorAll('.table-text');
      columns.forEach(column => {
        rowData.push(column.innerText);
      });
      csvContent += rowData.join(",") + "\n";
    });
  
    // Create CSV file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "flight_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
  }
  
  const exportBtn = document.getElementById('export-csv');
  exportBtn.addEventListener('click', exportToExcel);
  