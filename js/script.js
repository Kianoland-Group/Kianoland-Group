document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll jika ada hash di URL
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    // HEADER NAVBAR (Responsive Menu)
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

    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 0);
        }
    });

    const contactLink = document.getElementById("contactLink");
    if (contactLink) {
        contactLink.addEventListener("click", function () {
            const menuCheckbox = document.getElementById("menuCheckbox");
            if (menuCheckbox) {
                menuCheckbox.checked = false;
            }
        });
    }

    // HERO SECTION - Video Lazy Loading
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

    // IKLAN POPUP
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
            if (!popup.contains(event.target)) {
                popup.style.display = "none";
            }
        });
    }
});

/// ===============================================================================================================================================================================================
/// ============ IKLAN POPUP ======================================================================================================================================================================
/// ===============================================================================================================================================================================================
document.addEventListener('DOMContentLoaded', function () {
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
    } else {
        console.error("Elemen dengan ID 'wa-link' tidak ditemukan.");
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

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', updateProgressBar);
    }

    setTimeout(updateProgressBar, 100); // Delay to ensure content is loaded
});

let currentImageIndex = 0;
const images = [];

function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);

    const fullImageModal = new bootstrap.Modal(document.getElementById('fullImageModal'));
    fullImageModal.show();

    document.body.classList.add('modal-open');
}

const modalElement = document.getElementById('fullImageModal');
if (modalElement) {
    modalElement.addEventListener('hidden.bs.modal', function () {
        document.body.classList.remove('modal-open');
    });
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('modalImage').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('modalImage').src = images[currentImageIndex];
}

function setImagesArray() {
    const currentPage = window.location.pathname;

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

document.addEventListener("DOMContentLoaded", setImagesArray);

// Event listener untuk menyembunyikan scrollbar saat modal terbuka
document.getElementById('imageModal').addEventListener('show.bs.modal', function () {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

// Event listener untuk mengembalikan scrollbar saat modal ditutup
document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});

/// ===============================================================================================================================================================================================
/// ============ DOWNLOAD BROSUR ==================================================================================================================================================================
/// ===============================================================================================================================================================================================
// Ambil nama file HTML saat ini
var currentPage = window.location.pathname.split('/').pop();

// Seleksi tombol
var button = document.querySelector('.custom-button');

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
        alert('Brosur tidak tersedia untuk halaman ini.');
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
/// ============ CONTACT SECTION ==================================================================================================================================================================
/// ===============================================================================================================================================================================================
document.getElementById('contactForm').addEventListener('submit', function (event) {
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

document.getElementById("current-year").textContent = new Date().getFullYear();