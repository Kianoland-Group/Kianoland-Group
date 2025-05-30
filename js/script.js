'use strict';

document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded and parsed');
    
    // Initialize all components
    initHeader();
    initHeroVideo();
    initPopup();
    initWhatsAppLink();
    initTypeSection();
    initImageModal(); // Add this line
    initDownloadBrochure();
    initFacilities();
    initSupportSection();
    initContactForm();
    initSmoothScrolling();
    
    // Set current year in footer
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// ============ HEADER NAVBAR ==================================================================================================================================================================
function initHeader() {
    // Smooth Scroll jika ada hash di URL
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Responsive Menu
    const produkDropdown = document.getElementById("produkDropdown");
    if (produkDropdown) {
        produkDropdown.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdownMenu = document.querySelector(".dropdown-menu");
            if (dropdownMenu) {
                dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            }
        });
    }

    // Header scroll effect
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 0);
        }
    });

    // Close menu when clicking contact link
    const contactLink = document.getElementById("contactLink");
    if (contactLink) {
        contactLink.addEventListener("click", function () {
            const menuCheckbox = document.getElementById("menuCheckbox");
            if (menuCheckbox) {
                menuCheckbox.checked = false;
            }
        });
    }
}

// ============ HERO SECTION - VIDEO ===========================================================================================================================================================
function initHeroVideo() {
    const video = document.getElementById("hero-video");
    if (video) {
        const source = video.querySelector("source");

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        source.src = source.dataset.src;
                        video.load();
                        video.play();
                        observer.unobserve(video);
                    }
                });
            });
            observer.observe(video);
        } else {
            // Fallback jika IntersectionObserver tidak didukung
            source.src = source.dataset.src;
            video.load();
            video.play();
        }
    }
}

// ============ IKLAN POPUP ====================================================================================================================================================================
function initPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        setTimeout(function () {
            console.log("Menampilkan popup");
            popup.style.display = "flex";

            // Tambahkan class untuk trigger animasi
            setTimeout(() => {
                popup.classList.add("show-popup");
            }, 100);
        }, 10000);

        // Tutup popup saat tombol close di-click
        document.querySelectorAll(".dialog-close-button-1, .dialog-close-button-2").forEach(function (button) {
            button.onclick = function () {
                popup.style.display = "none";
            };
        });

        // Sembunyikan popup jika klik di luar area
        document.addEventListener("click", function (event) {
            if (popup.contains(event.target)) {
                popup.style.display = "none";
            }
        });
    }
}

// ============ WHATSAPP LINK ==================================================================================================================================================================
function initWhatsAppLink() {
    const waLink = document.getElementById('wa-link');
    if (waLink) {
        waLink.addEventListener('click', function (event) {
            const namaLengkap = document.getElementById('nama-lengkap');
            const email = document.getElementById('email');
            const noHandphone = document.getElementById('no-handphone');

            // Validasi elemen form
            if (!namaLengkap || !email || !noHandphone) {
                console.error('Form input tidak ditemukan.');
                return;
            }

            // Validasi input kosong
            if (!namaLengkap.value || !email.value || !noHandphone.value) {
                alert('Harap isi semua field sebelum melanjutkan.');
                event.preventDefault();
                return;
            }

            // Buat pesan WhatsApp
            const customMessage = `Halo, saya tertarik dengan Promo Booking 1 Juta!\n\nNama Lengkap: ${namaLengkap.value}\nEmail: ${email.value}\nNo Handphone: ${noHandphone.value}`;
            const phoneNumber = '6285282592945';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;

            // Update href
            this.href = whatsappURL;
        });
    }
}

// ============ TIPE RUMAH SECTION =============================================================================================================================================================
function initTypeSection() {
    const scrollContainer = document.querySelector('.scroll-container');
    const progressBar = document.getElementById('scrollProgressBar');
    const responsiveProgressBar = document.getElementById('responsiveProgressBar');

    function updateProgressBar() {
        if (!responsiveProgressBar || !progressBar || !scrollContainer) return;

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

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', updateProgressBar);
    }

    setTimeout(updateProgressBar, 100); // Delay to ensure content is loaded
}

// ============ IMAGE MODAL =================================================================================================================================================================
function initImageModal() {
    let currentImageIndex = 0;
    const images = [];

    function setImagesArray() {
        const currentPage = window.location.pathname;
        console.log('Detected page:', currentPage); // Debug which page is detected
        
        // Clear array first
        images.length = 0;

        if (currentPage.includes('/green-jonggol-village/rumah-30-60.html')) {
            images.push(
                '../assets/natureland-kiano-1/Cibarusah.jpeg',
                '../assets/produk/Natureland Kiano 3.jpeg',
                '../assets/hero/Background About.jpg',
                '../assets/natureland-kiano-1/1_1 - Photo.jpg'
            );
        } else if (currentPage.includes('/natureland-kiano-1/rumah-70-75.html')) {
            images.push(
                '../assets/natureland-kiano-1/Cibarusah.jpeg',
                '../assets/produk/Natureland Kiano 3.jpeg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_4 - Photo.jpg',
                '../assets/natureland-kiano-1/1_1 - Photo.jpg'
            );
        } else if (currentPage.includes('/natureland-kiano-2/rumah-40-60.html')) {
            images.push(
                '../assets/natureland-kiano-1/Cibarusah.jpeg',
                '../assets/produk/Natureland Kiano 3.jpeg',
                '../assets/hero/Background About.jpg',
                '../assets/natureland-kiano-1/1_1 - Photo.jpg'
            );
        } else if (currentPage.includes('/natureland-kiano-2/rumah-70-75.html')) {
            images.push(
                '../assets/natureland-kiano-1/Cibarusah.jpeg',
                '../assets/produk/Natureland Kiano 3.jpeg',
                '../assets/hero/Background About.jpg',
                '../assets/natureland-kiano-1/1_1 - Photo.jpg'
            );
        } else if (currentPage.includes('/natureland-kiano-3/rumah-1-5-lantai-40-60.html')) {
            images.push(
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_11 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_12 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_13 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_18 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/2_1 - Photo.jpg'
            );
        } else if (currentPage.includes('/natureland-kiano-3/rumah-2-lantai-40-60.html')) {
            images.push(
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_2 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_4 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_5 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_8 - Photo.jpg'
            );
        } else if (currentPage.includes('/natureland-kiano-3/rumah-40-60.html')) {
            images.push(
                '../assets/natureland-kiano-3/Rumah 40-60/1.jpg',
                '../assets/natureland-kiano-3/Rumah 40-60/2.jpg',
                '../assets/natureland-kiano-3/Rumah 40-60/3.jpg',
                '../assets/natureland-kiano-3/Rumah 40-60/4.jpg'
            );
        }
    }

    function openModal(imageSrc) {
        document.getElementById('modalImage').src = imageSrc;
        currentImageIndex = images.indexOf(imageSrc);

        const fullImageModal = new bootstrap.Modal(document.getElementById('fullImageModal'));
        fullImageModal.show();

        document.body.classList.add('modal-open');
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        const newSrc = images[currentImageIndex];
        console.log('Loading previous image:', newSrc); // Debug
        document.getElementById('modalImage').src = newSrc;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const newSrc = images[currentImageIndex];
        console.log('Loading next image:', newSrc); // Debug
        document.getElementById('modalImage').src = newSrc;
    }

    // Initialize
    setImagesArray();

    // Set up event listeners
    const modalElement = document.getElementById('fullImageModal');
    if (modalElement) {
        modalElement.addEventListener('hidden.bs.modal', function () {
            document.body.classList.remove('modal-open');
        });
    }

    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', function () {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        });

        imageModal.addEventListener('hidden.bs.modal', function () {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        });
    }

    // Make openModal function available globally
    window.openModal = openModal;
    window.prevImage = prevImage;
    window.nextImage = nextImage;
    console.log('Loaded images:', images); // Verify the array is populated
}

// ============ DOWNLOAD BROSUR ================================================================================================================================================================
function initDownloadBrochure() {
    // Ambil nama file HTML saat ini
    var currentPage = window.location.pathname.split('/').pop();

    // Seleksi tombol
    var button = document.querySelector('.custom-button');

    if (button) {
        // Tentukan URL PDF dan nama file berdasarkan halaman
        var pdfUrl, downloadFileName;
        switch (currentPage) {
            case 'natureland-kiano-3.html':
                pdfUrl = 'https://www.kianolandgroup.com/assets/natureland-kiano-3/Brosur-Cibarusah.pdf';
                downloadFileName = 'Brosur-Cibarusah.pdf';
                break;
            case 'green-jonggol-village.html':
                pdfUrl = 'https://www.kianolandgroup.com/assets/green-jonggol-village/Brosur-Green-Jonggol-Village.pdf';
                downloadFileName = 'Brosur-Green-Jonggol-Village.pdf';
                break;
            default:
                pdfUrl = null;
                console.log('Brosur tidak tersedia untuk halaman ini.');
        }

        // Tambahkan event listener jika PDF tersedia
        if (pdfUrl) {
            button.addEventListener('click', function (event) {
                event.preventDefault(); // Mencegah default behavior

                const a = document.createElement('a');
                a.href = pdfUrl;
                a.download = downloadFileName; // Nama file saat diunduh
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        }
    }
}

// ============ FASILITAS SECTION ==============================================================================================================================================================
function initFacilities() {
    const scrollContainer = document.getElementById('scrollContainerKiano');
    const progressBar = document.getElementById('scrollProgressBarKiano');

    if (scrollContainer && progressBar) {
        scrollContainer.addEventListener('scroll', function() {
            const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const scrollLeft = scrollContainer.scrollLeft;
            const scrollPercentage = (scrollLeft / scrollWidth) * 100;
            progressBar.style.width = scrollPercentage + '%';
        });
    }
}

// ============ SUPPORT BY SECTION =============================================================================================================================================================
function initSupportSection() {
    const supportWrapper = document.querySelector('.support-wrapper');
    if (supportWrapper) {
        const supportItems = document.querySelectorAll('.support-item');
        const totalWidth = Array.from(supportItems).reduce((acc, item) => acc + item.offsetWidth, 0);
        supportWrapper.style.width = `${totalWidth * 2}px`; // Membuat lebar dua kali lipat dari total item
    }
}

// ============ CONTACT FORM ===================================================================================================================================================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Ambil nama file HTML dari URL
            var currentPage = window.location.pathname.split('/').pop();

            // Tentukan teks custom berdasarkan halaman
            var customMessage;
            switch (currentPage) {
                case 'green-jonggol-village.html':
                    customMessage = "Saya berminat booking di Green Jonggol Village\n\n";
                    break;
                case 'natureland-kiano-1.html':
                    customMessage = "Saya berminat booking di Natureland Kiano 1\n\n";
                    break;
                case 'natureland-kiano-2.html':
                    customMessage = "Saya berminat booking di Natureland Kiano 2\n\n";
                    break;
                case 'natureland-kiano-3.html':
                    customMessage = "Saya berminat booking di Natureland Kiano 3\n\n";
                    break;
                default:
                    customMessage = "Saya berminat booking di lokasi yang tidak dikenal\n\n";
            }

            // Ambil nilai input dari form
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            // Format pesan untuk WhatsApp
            var whatsappMessage = `${customMessage}Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

            // Nomor WhatsApp tujuan
            var phoneNumber = '6285775381495';

            // Buat URL untuk WhatsApp
            var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            // Arahkan ke WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }
}

// ============ SMOOTH SCROLLING ===============================================================================================================================================================
function initSmoothScrolling() {
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
}