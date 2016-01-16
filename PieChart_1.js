// Chart.js pie chart
var pieData = [
	// Pie Chart data set:
	{
		value: 300,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Sosiaali- ja terveysmenot"
	},
	{
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Puolustusvoimat"
	},
	{
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Yellow"
	}
	];
	var pieChart_1 = document.getElementById("Chart_1").getContext("2d");
	new Chart(pieChart_1).Pie(pieData,{
		responsive: false,
		maintainAspectRatio: true
});
