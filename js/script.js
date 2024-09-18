document.getElementById('produkDropdown').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default anchor action
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.scroll-container');
    const progressBar = document.getElementById('scrollProgressBar');
    const responsiveProgressBar = document.getElementById('responsiveProgressBar');

    function updateProgressBar() {
        if (responsiveProgressBar.style.display !== 'none') {
            const scrollLeft = scrollContainer.scrollLeft;
            const scrollWidth = scrollContainer.scrollWidth;
            const clientWidth = scrollContainer.clientWidth;
            const scrollMax = scrollWidth - clientWidth;
            const scrollPercent = (scrollLeft / scrollMax) * 100;
            progressBar.style.width = scrollPercent + '%';
            progressBar.setAttribute('aria-valuenow', scrollPercent);
        }
    }

    scrollContainer.addEventListener('scroll', updateProgressBar);

    setTimeout(updateProgressBar, 100); // Delay to ensure content is loaded
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('scrollContainerKiano');
    const progressBar = document.getElementById('scrollProgressBarKiano');

    scrollContainer.addEventListener('scroll', function() {
        // Total scrollable width
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        // Current scroll position
        const scrollLeft = scrollContainer.scrollLeft;
        // Calculate the scroll percentage
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        // Set progress bar width
        progressBar.style.width = scrollPercentage + '%';
    });
});
