// AIR Platform Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Dashboard Navigation
    const navItems = document.querySelectorAll('.dashboard-nav-item');
    const sections = document.querySelectorAll('.dashboard-section');
    
    // Set up click events for dashboard navigation
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item and target section
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            
            // For mobile: scroll to top of content area
            document.querySelector('.dashboard-content').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Initialize Charts
    initializeCharts();
    
    // Initialize Impact Map Interactions
    initializeMapInteractions();
});

// Function to initialize all dashboard charts
function initializeCharts() {
    // Impact Distribution Chart (Doughnut)
    const impactDistributionCtx = document.getElementById('impactDistributionChart').getContext('2d');
    const impactDistributionChart = new Chart(impactDistributionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Clean Water Access', 'Flood Protection', 'Climate-Smart Agriculture', 'Renewable Energy', 'Education & Training'],
            datasets: [{
                label: 'Impact Distribution',
                data: [35, 25, 20, 10, 10],
                backgroundColor: [
                    '#1B9CFC', // Blue
                    '#FFA600', // Yellow/Orange
                    '#2ECC71', // Green
                    '#E74C3C', // Red
                    '#ED6A82'  // Pink
                ],
                borderColor: '#FFFFFF',
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 20,
                        boxWidth: 12,
                        font: {
                            family: 'Roboto'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${context.label}: ${percentage}%`;
                        }
                    }
                }
            },
            cutout: '65%'
        }
    });
    
    // Donation Timeline Chart (Line)
    const donationTimelineCtx = document.getElementById('donationTimelineChart').getContext('2d');
    const donationTimelineChart = new Chart(donationTimelineCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Donations ($)',
                data: [500, 300, 0, 1200, 200, 600, 0, 800, 400, 0, 950, 300],
                borderColor: '#1B9CFC',
                backgroundColor: 'rgba(27, 156, 252, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: '#1B9CFC',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            return `Donation: $${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        borderDash: [5, 5]
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            }
        }
    });
}

// Function to initialize map interactions
function initializeMapInteractions() {
    const markers = document.querySelectorAll('.map-marker');
    
    markers.forEach(marker => {
        // Close all tooltips when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = marker.contains(event.target);
            
            if (!isClickInside) {
                const tooltip = marker.querySelector('.marker-tooltip');
                if (tooltip) {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                }
            }
        });
        
        // Show tooltip on marker click for mobile
        marker.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
                
                // Close all tooltips first
                document.querySelectorAll('.marker-tooltip').forEach(t => {
                    t.style.visibility = 'hidden';
                    t.style.opacity = '0';
                });
                
                // Show this tooltip
                const tooltip = this.querySelector('.marker-tooltip');
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        });
    });
    
    // Ensure tooltips don't go off-screen
    function adjustTooltipPosition() {
        const tooltips = document.querySelectorAll('.marker-tooltip');
        
        tooltips.forEach(tooltip => {
            const rect = tooltip.getBoundingClientRect();
            const parent = tooltip.closest('.impact-map');
            const parentRect = parent.getBoundingClientRect();
            
            // Check if tooltip is going outside the left edge
            if (rect.left < parentRect.left) {
                tooltip.style.left = '0';
                tooltip.style.transform = 'translateX(0)';
                
                // Adjust arrow position
                const arrow = tooltip.querySelector('::after');
                if (arrow) {
                    arrow.style.left = '20px';
                    arrow.style.transform = 'translateX(0)';
                }
            }
            
            // Check if tooltip is going outside the right edge
            if (rect.right > parentRect.right) {
                tooltip.style.left = '100%';
                tooltip.style.transform = 'translateX(-100%)';
                
                // Adjust arrow position
                const arrow = tooltip.querySelector('::after');
                if (arrow) {
                    arrow.style.left = 'calc(100% - 20px)';
                    arrow.style.transform = 'translateX(0)';
                }
            }
        });
    }
    
    // Call adjustment function when markers are hovered
    markers.forEach(marker => {
        marker.addEventListener('mouseenter', adjustTooltipPosition);
    });
}
