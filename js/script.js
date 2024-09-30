document.addEventListener("DOMContentLoaded", function() {
    const url = "https://www.kianolandgroup.com"; // Ganti dengan URL yang valid
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Proses data yang diterima
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

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

const supportWrapper = document.querySelector('.support-wrapper');
const items = [...document.querySelectorAll('.support-item')];

// Duplikat elemen untuk memastikan loop yang mulus
items.forEach(item => {
  const clone = item.cloneNode(true);
  supportWrapper.appendChild(clone);
});