//setup

const data = {
  datasets: [{
    label: 'Coffee Sales:',
    data: [
    {x: 25, y: 34, r: 15, company: "Starbucks Coffee"}, 
    {x: 30, y: 32, r: 10, company: "Starbucks Coffee"},
    {x: 34, y: 34, r: 10, company: "Costa Coffee"},
    {x: 38, y: 36, r: 25, company: "Costa Coffee"},
    {x: 26, y: 38, r: 15, company: "Costa Coffee"},
    {x: 28, y: 40, r: 15, company: "Dunki Donuts Coffee"},
    {x: 31, y: 37, r: 15, company: "Nero Coffee"},
    {x: 33, y: 40, r: 15, company: "Starbucks Coffee"},
    {x: 39, y: 35, r: 28, company: "Nero Coffee"},
    ],
    backgroundColor: [
    		"#F0F8FF",
    		"#FAEBD7",
    		"#A52A2A",
    		"#8A2BE2",
    		"#FAEBD7",
    		"#FF7F50",
    		"#DC143C",
    		"#7FFF00",
    		"#00FFFF",
    ]
  }]
};

//config

const config = {
  type: 'bubble',
  data: data,
  options: {
  	plugins: {
  		legend: {
  			display: false
  		},
  		title: {
            font: {
                size: 25
            },
            display: true,
            text: "The Basic Bubble Chart With Chart.js",
            position: "top",
            align: "center"
        },
  		tooltip: {
  			callbacks: {
  				label: (context) => {
  					console.log(context)
  					return context.raw.company
  				} 
  			}
  		}
  	}
  }
};

//render

const myChart = new Chart(
    document.getElementById("myChart"),
    config
);