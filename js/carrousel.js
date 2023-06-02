document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelector('.carousel-items');
    const carouselControlLeft = document.querySelector('#content-column-one');
    const carouselControlRight = document.querySelector('#content-column-three');
    const itemsPerPage = 5;
    let currentIndex = 0;

    carouselControlLeft.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselItems.children.length) % carouselItems.children.length;
        updateCarousel();
    });
    
    carouselControlRight.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselItems.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const visibleItems = getVisibleItems();

        for (let i = 0; i < carouselItems.children.length; i++) {
            const item = carouselItems.children[i];
            item.style.display = visibleItems.includes(i) ? 'block' : 'none';
        }
    }

    function getVisibleItems() {
        const visibleItems = [];
        const totalItems = carouselItems.children.length;
    
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % totalItems;
            visibleItems.push(index);
        }
    
        return visibleItems;
    }

    updateCarousel();
});