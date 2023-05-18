//graph
const chartCanvas = document.getElementById('myChart');
const chartHeight = chartCanvas.clientHeight;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Flights',
      data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
      backgroundColor: 'rgba(82, 205, 255, 1)',
      borderWidth: 0
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(chartCanvas, config);