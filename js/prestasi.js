document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function showNextSlide() {
        galleryItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % galleryItems.length;
        galleryItems[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000); // Berganti gambar setiap 3 detik

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.classList.add('hover');
        });
        item.addEventListener('mouseout', function() {
            item.classList.remove('hover');
        });
    });
});
