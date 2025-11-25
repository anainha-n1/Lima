(function () {
    const { radar } = window.pageData || { radar: {}, radar: {}, pie: {} };

    const paleta = {
        cyano: 'rgba(34, 211, 238, 1)',
        azul: 'rgba(59, 130, 246, 1)',
        violeta: 'rgba(139, 92, 246, 1)',
        pink: 'rgba(236, 72, 153, 1)',
        verde: 'rgba(45, 212, 191, 1)',
        cinza: 'rgb(97, 95, 95)'
    }

    Chart.defaults.color = 'rgba(148, 163, 184, 0.2)';
    Chart.defaults.borderColor = 'rgba(148, 163, 184, 0.2)';
    Chart.defaults.plugins.legend.labels.color = '#f8f8f8';
    Chart.defaults.font.family = 'Arial';

    //grafico de Linha
    const graficoradar = document.getElementById('radarChart');
    if (graficoradar) {
        new Chart(graficoradar, {
            type: 'radar',
            data: {
                labels: radar.labels,
                datasets: [{
                    label: 'nmr1',
                    data: [65, 59, 90, 81, 56, 55, 40],
                    fill: true,
                    backgroundColor: 'rgba(67, 253, 76, 0.2)',
                    borderColor: 'rgba(93, 253, 131, 1)',
                    pointBackgroundColor: 'rgba(0, 255, 47, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(99, 255, 135, 1)'
                }, {
                    label: 'nmr2',
                    data: [6, 9, 19, 56, 30, 60, 69],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#6d7072ff' }
                    },
                    tooltip: { mode: 'index', intersect: false }
                },
                interaction: { mode: 'nearest', axis: 'x', intersect: false },
                scales: {
                    x: { grid: { display: false } },
                    y: { beginAtZero: true }
                }
            }
        })
    }

})();