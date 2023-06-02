window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    var searchInput = document.getElementById('search');
    
    if (windowWidth <= 600) {
    searchInput.style.display = 'none';
    } else {
    searchInput.style.display = 'flex';
    }
});

window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    var mainSection = document.getElementById('main');
    var columnRight = document.getElementById('column-right');
    var columnLeft = document.getElementById('column-left');

    if (windowWidth <= 990) {
        columnRight.style.width = '100%'
        mainSection.style.flexDirection = 'column';
        mainSection.style.justifyContent = 'space-between';
        mainSection.insertBefore(columnRight, columnLeft);

        columnLeft.style.width = '100%';
        columnLeft.style.height = '20%';
        columnRight.style.height = '20%';
        
    } else {
        mainSection.style.flexDirection = 'row';
        mainSection.style.justifyContent = 'space-between';
        mainSection.insertBefore(columnLeft, columnRight);

        columnRight.style.width = '77%';
        columnLeft.style.width = '21%';
    }
});