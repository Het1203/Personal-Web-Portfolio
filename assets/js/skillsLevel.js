window.onload = function () {
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var skillsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['HTML', 'JavaScript', 'Node.js', 'CSS', 'Bootstrap'],
            datasets: [{
                label: 'Skill Level',
                data: [95, 85, 80, 70, 65],
                backgroundColor: [
                    '#2A265F',
                    '#3C3D99',
                    '#5752D1',
                    '#8481DD',
                    '#B2B0EA'
                ],
                borderColor: [
                    '#2A265F',
                    '#3C3D99',
                    '#5752D1',
                    '#8481DD',
                    '#B2B0EA'
                ],
                borderWidth: 1,
                hoverOffset: 10
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#000',
                        font: {
                            size: 16,
                            family: 'Playfair Display',
                            style: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw + '%';
                            return label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'My Skill Levels',
                    color: '#000',
                    font: {
                        size: 20,
                        family: 'Playfair Display',
                        style: 'bold'
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuad'
            }
        }
    });
}
