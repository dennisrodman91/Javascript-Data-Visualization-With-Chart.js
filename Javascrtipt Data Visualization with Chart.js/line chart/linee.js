//setup

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
    borderColor: '#C850C0',
    tension: 0.1,
  }]
};

//config

/*
const options = {
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: true
    }
  }
};
*/

const config = {
  type: 'line',
  data: data,
};

//render

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );