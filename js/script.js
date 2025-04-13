window.addEventListener('load', function() {
    if (window.location.hash) {
        var element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/// ===============================================================================================================================================================================================
/// ============ HEADER NAVBAR (Responsive Menu) ==================================================================================================================================================
/// ===============================================================================================================================================================================================
document.getElementById('produkDropdown').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default anchor action
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
document.getElementById("contactLink").addEventListener("click", function() {
    document.getElementById("menuCheckbox").checked = false;
});

/// ===============================================================================================================================================================================================
/// ============ HERO SECTION - VIDEO =============================================================================================================================================================
/// ===============================================================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("hero-video");
    var source = video.querySelector("source");

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    source.src = source.dataset.src;
                    video.load();
                    video.play();
                    observer.unobserve(video); // stop observing after load
                }
            });
        });

        observer.observe(video);
    } else {
        // Fallback if IntersectionObserver is not supported
        source.src = source.dataset.src;
        video.load();
        video.play();
    }
});

/// ===============================================================================================================================================================================================
/// ============ TIPE RUMAH SECTION ===============================================================================================================================================================
/// ===============================================================================================================================================================================================
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

/// ===============================================================================================================================================================================================
/// ============ FASILITAS SECTION ================================================================================================================================================================
/// ===============================================================================================================================================================================================
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

/// ===============================================================================================================================================================================================
/// ============ SUPPORT BY SECTION ====================================================================================================================================================================
/// ===============================================================================================================================================================================================
document.addEventListener('DOMContentLoaded', () => {
    const supportWrapper = document.querySelector('.support-wrapper');
    const supportItems = document.querySelectorAll('.support-item');
    const totalWidth = Array.from(supportItems).reduce((acc, item) => acc + item.offsetWidth, 0);

    supportWrapper.style.width = `${totalWidth * 2}px`; // Membuat lebar dua kali lipat dari total item
});

/// ===============================================================================================================================================================================================
/// ============ CUSTOM JS FOR SMOOTH SCROLLING ===================================================================================================================================================
/// ===============================================================================================================================================================================================
document.addEventListener('DOMContentLoaded', function() {
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
});