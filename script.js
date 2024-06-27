// Toggle the navigation menu
document.querySelector('.panel-all').addEventListener('click', function() {
    let panelOps = document.querySelector('.panel-ops');
    if (panelOps.style.display === 'none' || panelOps.style.display === '') {
        panelOps.style.display = 'flex';
    } else {
        panelOps.style.display = 'none';
    }
});

// Scroll to top function
document.querySelector('.foot-panel1').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
