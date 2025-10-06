// ============ KEYBOARD DETECTION FOR CHAT ====================================================================================================================================================
function initKeyboardDetection() {
  const chatBox = document.getElementById('chat-box');
  const formContainer = document.querySelector('.message-form-container');
  const userMessage = document.getElementById('user-message');
  
  if (userMessage && formContainer) {
    userMessage.addEventListener('focus', function() {
      // For mobile devices
      if (window.innerWidth <= 576) {
        document.body.classList.add('keyboard-open');
        setTimeout(() => {
          // Scroll to bottom of chat
          const chatBody = document.querySelector('.chat-body');
          if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
          }
        }, 300);
      }
    });
    
    userMessage.addEventListener('blur', function() {
      document.body.classList.remove('keyboard-open');
    });
  }
}

// ============ INITIALIZE WHEN DOM LOADED =====================================================================================================================================================
'use strict';

document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded and parsed');
    
    // Initialize all components
    initHeader();
    initHeroVideo();
    initPopup();
    initChatBubble();
    initWhatsAppLink();
    initTypeSection();
    initImageModal();
    initDownloadBrochure();
    initFacilities();
    initSupportSection();
    initContactForm();
    initSmoothScrolling();
    initKeyboardDetection();
    
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

        // Tutup popup hanya jika klik di luar kotak popup
        document.addEventListener("click", function (event) {
            if (popup.classList.contains("show-popup") && !event.target.closest(".popup-box")) {
                popup.style.display = "none";
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("popup-video");
  const loader = document.getElementById("video-loader");

  if (video) {
    video.addEventListener("waiting", () => {
      loader.style.display = "block"; // tampil saat buffering
    });
    video.addEventListener("playing", () => {
      loader.style.display = "none"; // hilang saat main
    });
    video.addEventListener("canplay", () => {
      loader.style.display = "none"; // hilang kalau sudah siap play
    });
  }
});

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
            const phoneNumber = '628111611724';
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
let images = [];
let currentImageIndex = 0;

function initImageModal() {

    function setImagesArray() {
    const currentPage = window.location.pathname;
    console.log("Current page:", currentPage); // 🔍 debug log
    images = []; // reset

        if (currentPage.includes('green-jonggol-village/rumah-30-60')) {
            images.push(
                '../assets/green-jonggol-village/Rumah 30-60/1.jpeg',
                '../assets/green-jonggol-village/Rumah 30-60/2.jpeg',
                '../assets/green-jonggol-village/Rumah 30-60/3.jpeg',
                '../assets/green-jonggol-village/Rumah 30-60/4.jpeg',
                '../assets/green-jonggol-village/Rumah 30-60/5.jpeg',
            );
        } 
        else if (currentPage.includes('green-jonggol-village/rumah-36-72')) {
            images.push(
                '../assets/green-jonggol-village/Rumah 36-72/1.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/2.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/3.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/4.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/5.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/6.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/7.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/8.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/9.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/10.jpeg',
                '../assets/green-jonggol-village/Rumah 36-72/11.jpeg',
            );
        }
        else if (currentPage.includes('natureland-kiano-3/rumah-1-5-lantai-60-60')) {
            images.push(
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_11 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_12 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_13 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/1_18 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 1,5 Lantai/2_1 - Photo.jpg'
            );
        }
        else if (currentPage.includes('natureland-kiano-3/rumah-2-lantai-80-60')) {
            images.push(
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_2 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_4 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_5 - Photo.jpg',
                '../assets/natureland-kiano-3/Rumah 2 Lantai/4_8 - Photo.jpg'
            );
        }
        else if (currentPage.includes('natureland-kiano-3/rumah-tipe-40-60')) {
            images.push(
                '../assets/natureland-kiano-3/Rumah 40-60/1.jpg',
                '../assets/natureland-kiano-3/Rumah 40-60/2.jpg',
                '../assets/natureland-kiano-3/Rumah 40-60/3.jpg',
                '../assets/natureland-kiano-3/Rumah 40-60/4.jpg'
            );
        }
    }

    setImagesArray();

    window.openModal = function(imageSrc) {
        if (!imageSrc) return;

        imageSrc = decodeURIComponent(imageSrc);

        currentImageIndex = images.findIndex(img => img.endsWith(imageSrc.split('/').pop()));

        if (currentImageIndex === -1) {
            console.error('Image not found in images array:', imageSrc, images);
            return;
        }

        document.getElementById('modalImage').src = images[currentImageIndex];
        const fullImageModal = new bootstrap.Modal(document.getElementById('fullImageModal'));
        fullImageModal.show();
    };

    window.prevImage = function() {
        if (images.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        document.getElementById('modalImage').src = images[currentImageIndex];
    };

    window.nextImage = function() {
        if (images.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('modalImage').src = images[currentImageIndex];
    };

    const handleModalShow = () => {
        const chatBubble = document.getElementById('chat-bubble');
        const whatsappButton = document.querySelector('.whatsapp-float');
        if (chatBubble) {
            chatBubble.classList.add('hidden-by-modal');
        }
        if (whatsappButton) {
            whatsappButton.classList.add('hidden-by-modal');
        }
    };

    const handleModalHide = () => {
        setTimeout(() => {
            const fullImageModalElement = document.getElementById('fullImageModal');
            const imageGridModalElement = document.getElementById('imageModal');

            const isAnyModalVisible = 
                (fullImageModalElement && fullImageModalElement.classList.contains('show')) || 
                (imageGridModalElement && imageGridModalElement.classList.contains('show'));

            if (!isAnyModalVisible) {
                const chatBubble = document.getElementById('chat-bubble');
                const whatsappButton = document.querySelector('.whatsapp-float');
                if (chatBubble) {
                    chatBubble.classList.remove('hidden-by-modal');
                }
                if (whatsappButton) {
                    whatsappButton.classList.remove('hidden-by-modal');
                }
            }
        }, 150);
    };

    const fullImageModalElement = document.getElementById('fullImageModal');
    const imageGridModalElement = document.getElementById('imageModal');

    if (fullImageModalElement) {
        fullImageModalElement.addEventListener('show.bs.modal', handleModalShow);
        fullImageModalElement.addEventListener('hidden.bs.modal', handleModalHide);
    }

    if (imageGridModalElement) {
        imageGridModalElement.addEventListener('show.bs.modal', handleModalShow);
        imageGridModalElement.addEventListener('hidden.bs.modal', handleModalHide);
    }

    window.openModal = openModal;
    window.prevImage = prevImage;
    window.nextImage = nextImage;
}


// ============ DOWNLOAD BROSUR (NEW & IMPROVED) ==========================================================================================================================================
/**
 * Asynchronously downloads a file by fetching it as a blob and creating a temporary link.
 * @param {string} url - The URL of the file to download.
 * @param {string} filename - The desired name for the downloaded file.
 */
async function downloadFileUsingFetch(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Gagal mengunduh file: ${response.statusText}`);
        }
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
    } catch (error) {
        console.error('Proses unduh gagal:', error);
        alert('Gagal mengunduh brosur. Silakan coba lagi atau hubungi kami.');
        // Fallback: Buka di tab baru jika fetch gagal
        window.open(url, '_blank');
    }
}

function initDownloadBrochure() {
    const button = document.querySelector('.custom-button, .custom-button-green-jonggol-village');

    if (button) {
        let pdfUrls = [];
        let downloadFileNames = [];
        const currentPath = window.location.pathname;

        if (currentPath.includes('natureland-kiano-3')) {
            pdfUrls = [
                '/assets/brosur/natureland-kiano-3/BROSUR CIBARUSAH DEPAN.pdf',
                '/assets/brosur/natureland-kiano-3/BROSUR CIBARUSAH BELAKANG.pdf'
            ];
            downloadFileNames = [
                'Brosur-Natureland-Kiano-3-Depan.pdf',
                'Brosur-Natureland-Kiano-3-Belakang.pdf'
            ];
        } else if (currentPath.includes('green-jonggol-village')) {
            pdfUrls = [
                '/assets/brosur/green-jonggol-village/brosur jonggol depan.pdf',
                '/assets/brosur/green-jonggol-village/Brosur jonggol Belakang.pdf'
            ];
            downloadFileNames = [
                'Brosur-Green-Jonggol-Village-Depan.pdf',
                'Brosur-Green-Jonggol-Village-Belakang.pdf'
            ];
        }

        if (pdfUrls.length && downloadFileNames.length) {
            button.addEventListener('click', async function (event) {
                event.preventDefault();
                for (let i = 0; i < pdfUrls.length; i++) {
                    await downloadFileUsingFetch(pdfUrls[i], downloadFileNames[i]);
                }
            });
        }
    } else {
        console.log('Tombol unduh brosur tidak ditemukan di halaman ini.');
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

    // Tambahkan pengecekan ini
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
            var phoneNumber = '628111611724';

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

// ============ CHAT BUBBLE ===============================================================================================================================================================
function initChatBubble() {
  const chatBubble = document.getElementById('chat-bubble');
  const chatBox = document.getElementById('chat-box');
  const closeBtn = document.querySelector('.chat-close-btn');
  const sendBtn = document.getElementById('send-message-btn');
  const userMessage = document.getElementById('user-message');
  
  // Fungsi untuk menambahkan timestamp
  const addTimestamps = () => {
    document.querySelectorAll('.message-time').forEach(el => {
      if (!el.textContent) {
        el.textContent = getCurrentTime();
      }
    });
  };

  // Fungsi format waktu
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  if (chatBubble && chatBox && closeBtn && sendBtn && userMessage) {
    // Tambahkan timestamp saat pertama kali load
    addTimestamps();
    
    chatBox.style.display = 'none';
    
    chatBubble.addEventListener('click', function() {
      chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    });
    
    closeBtn.addEventListener('click', function() {
      chatBox.style.display = 'none';
    });
    
    // Fungsi untuk mengirim pesan
    const sendMessage = async () => {
        const message = userMessage.value.trim();
        
        if (message) {
            // Tambahkan pesan pengguna
            const newMsg = document.createElement('div');
            newMsg.className = 'message user-message';
            newMsg.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time"></span>
            </div>
            `;
            
            document.querySelector('.chat-body').appendChild(newMsg);
            userMessage.value = '';
            addTimestamps();
            
            try {
                // Kirim ke backend FastAPI
                const response = await fetch('https://kianoland-group-chatbot-ai-production.up.railway.app/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_input: message })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const botResponses = data.response.formatted;

                // Fungsi kecil untuk membuat elemen pesan bot
                const createBotMessageElement = (text) => {
                    const botMessageElement = document.createElement('div');
                    botMessageElement.className = 'message bot-message';
                    const formattedText = text.replace(/\n/g, '<br>');
                    botMessageElement.innerHTML = `
                        <div class="message-content">
                        <p>${formattedText}</p>
                        <span class="message-time"></span>
                        </div>
                    `;
                    document.querySelector('.chat-body').appendChild(botMessageElement);
                };

                if (Array.isArray(botResponses)) {
                    // Jika respons adalah sebuah array/list
                    botResponses.forEach((msg, index) => {
                        // Beri jeda waktu untuk setiap pesan agar terasa alami
                        setTimeout(() => {
                            if (msg.trim()) {
                                createBotMessageElement(msg.trim());
                                addTimestamps(); // Panggil addTimestamps setelah setiap pesan
                            }
                        }, index * 1000); // Jeda 1 detik antar pesan
                    });
                } else {
                    // Jika respons hanya pesan tunggal biasa
                    createBotMessageElement(botResponses);
                    addTimestamps();
                }

            } catch (error) {
                console.error('Error:', error);
                // Fallback response jika API error
                const botResponse = document.createElement('div');
                botResponse.className = 'message bot-message';
                botResponse.innerHTML = `
                    <div class="message-content">
                    <p>Maaf, terjadi kesalahan. Silakan coba lagi nanti.</p>
                    <span class="message-time"></span>
                    </div>
                `;
                document.querySelector('.chat-body').appendChild(botResponse);
                addTimestamps();
            }
            
            addTimestamps();
            // Scroll ke bawah
            chatBox.querySelector('.chat-body').scrollTop = chatBox.querySelector('.chat-body').scrollHeight;
        }
    };
    
    sendBtn.addEventListener('click', sendMessage);
    userMessage.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
}

// Fungsi untuk memeriksa status server
async function checkServerStatus() {
    try {
        const response = await fetch('https://kianoland-group-chatbot-ai-production.up.railway.app/health');
        if (response.ok) {
            updateStatusIndicator(true);
        } else {
            updateStatusIndicator(false);
        }
    } catch (error) {
        updateStatusIndicator(false);
    }
}

// Fungsi untuk mengupdate indikator status
function updateStatusIndicator(isOnline) {
    const statusElement = document.querySelector('.status-indicator');
    if (statusElement) {
        statusElement.textContent = isOnline ? 'Online' : 'Offline';
        statusElement.className = isOnline ? 'status-indicator online' : 'status-indicator offline';
    }
}

// Panggil fungsi check setiap 10 detik
setInterval(checkServerStatus, 10000);

// Cek status saat pertama kali load
document.addEventListener('DOMContentLoaded', checkServerStatus);