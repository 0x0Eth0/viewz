$(function() {
	'use strict';
	var ctx1 = document.getElementById('chartBar1').getContext('2d');
	new Chart(ctx1, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				label: '# of Votes',
				data: [12, 39, 20, 10, 25, 18],
				backgroundColor: '#7fceef'
			}]
		},
		options: {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					barPercentage: 0.6,
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	var ctx2 = document.getElementById('chartBar2').getContext('2d');
	new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				label: '# of Votes',
				data: [12, 39, 20, 10, 25, 18],
				backgroundColor: 'rgba(127, 206, 239, 0.5)'
			}]
		},
		options: {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					barPercentage: 0.6,
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	var ctx3 = document.getElementById('chartBar3').getContext('2d');
	var gradient = ctx3.createLinearGradient(0, 0, 0, 250);
	gradient.addColorStop(0, '#fdc3cf');
	gradient.addColorStop(1, '#ffe7ad');
	new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				label: '# of Votes',
				data: [12, 39, 20, 10, 25, 18],
				backgroundColor: gradient,
				hoverBackgroundColor:gradient
			}]
		},
		options: {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					barPercentage: 0.6,
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	var ctx4 = document.getElementById('chartBar4').getContext('2d');
	new Chart(ctx4, {
		type: 'horizontalBar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				label: '# of Votes',
				data: [12, 39, 20, 10, 25, 18],
				backgroundColor: ['#7fceef', '#ffe7ad', '#fdc3cf', '#97db97', '#ffbc85', '#55ddd0']
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	var ctx5 = document.getElementById('chartBar5').getContext('2d');
	new Chart(ctx5, {
		type: 'horizontalBar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				data: [12, 39, 20, 10, 25, 18],
				backgroundColor: ['#7fceef', '#ffe7ad', '#fdc3cf', '#97db97', '#ffbc85', '#55ddd0']
			}, {
				data: [22, 30, 25, 30, 20, 40],
				backgroundColor: '#f0f2f5'
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	/** STACKED BAR CHART **/
	var ctx6 = document.getElementById('chartStacked1');
	new Chart(ctx6, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				data: [10, 24, 20, 25, 35, 50],
				backgroundColor: '#7fceef',
				borderWidth: 1,
				fill: true
			}, {
				data: [10, 24, 20, 25, 35, 50],
				backgroundColor: '#ffe7ad',
				borderWidth: 1,
				fill: true
			}, {
				data: [20, 30, 28, 33, 45, 65],
				backgroundColor: '#fdc3cf',
				borderWidth: 1,
				fill: true
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					barPercentage: 0.5,
					stacked: true,
					ticks: {
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	var ctx7 = document.getElementById('chartStacked2');
	new Chart(ctx7, {
		type: 'horizontalBar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				data: [10, 24, 20, 25, 35, 50],
				backgroundColor: '#7fceef',
				borderWidth: 1,
				fill: true
			}, {
				data: [10, 24, 20, 25, 35, 50],
				backgroundColor: '#ffe7ad',
				borderWidth: 1,
				fill: true
			}, {
				data: [20, 30, 28, 33, 45, 65],
				backgroundColor: '#fdc3cf',
				borderWidth: 1,
				fill: true
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgb(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	/* LINE CHART */
	var ctx8 = document.getElementById('chartLine1');
	new Chart(ctx8, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
				borderColor: '#7fceef ',
				borderWidth: 1,
				fill: false
			}, {
				data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
				borderColor: '#ffe7ad',
				borderWidth: 1,
				fill: false
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	/** AREA CHART **/
	var ctx9 = document.getElementById('chartArea1');
	var gradient1 = ctx3.createLinearGradient(0, 350, 0, 0);
	gradient1.addColorStop(0, 'rgba(127, 206, 239, .0)');
	gradient1.addColorStop(1, 'rgba(127, 206, 239, .5)');
	var gradient2 = ctx3.createLinearGradient(0, 280, 0, 0);
	gradient2.addColorStop(0, 'rgba(255, 231, 173, 0)');
	gradient2.addColorStop(1, 'rgba(255, 231, 173, 0.5)');
	new Chart(ctx9, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
				borderColor: '#7fceef',
				borderWidth: 1,
				backgroundColor: gradient1
			}, {
				data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
				borderColor: '#ffe7ad',
				borderWidth: 1,
				backgroundColor: gradient2
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}],
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 11,
						fontColor: "rgba(171, 167, 167,0.9)",
					},
					gridLines: {
						display: true,
						color: 'rgba(171, 167, 167,0.2)',
						drawBorder: false
					},
				}]
			}
		}
	});
	/** PIE CHART **/
	var datapie = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
		datasets: [{
			data: [20, 20, 30, 5, 25],
			backgroundColor: ['#7fceef', '#ffe7ad', '#fdc3cf', '#97db97', '#ffbc85']
		}]
	};
	var optionpie = {
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	};
	// For a doughnut chart
	var ctx6 = document.getElementById('chartPie');
	var myPieChart6 = new Chart(ctx6, {
		type: 'doughnut',
		data: datapie,
		options: optionpie
	});
	// For a pie chart
	var ctx7 = document.getElementById('chartDonut');
	var myPieChart7 = new Chart(ctx7, {
		type: 'pie',
		data: datapie,
		options: optionpie
	});
});