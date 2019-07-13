const trafficCanvas = document.getElementById('traffic-chart'); 

// Global settings.
Chart.defaults.global.elements.point.radius = 5;
Chart.defaults.global.elements.point.backgroundColor = 'rgba(255, 255, 255, 0)';


let lineChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'TRAFFIC',
            fill: true,
            lineTension: 0,
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500 ], 
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,  
        }]
    },
    options: {
        animation: {
           duration: 0
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); 