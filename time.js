// =======================
// JAM & TANGGAL BERJALAN
// =======================
function updateTime() {
    const now = new Date();

    // Jam, menit, detik
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Hari dan tanggal
    const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    // Format waktu dan tanggal
    const timeString = `${dayName}, ${date} ${monthName} ${year} ${hours}:${minutes}:${seconds}`;

    const timeElement = document.getElementById('time');
    if(timeElement) {
        timeElement.textContent = timeString;
    }
}

// Jalankan pertama kali
updateTime();
// Update setiap 1 detik
setInterval(updateTime, 1000);

// =======================
// CONTACT FORM MODAL
// =======================
const form = document.getElementById('contactForm');
const modal = document.getElementById('modalSuccess');
const closeModal = document.getElementById('closeModal');

if(form && modal && closeModal){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name === "" || email === "" || message === ""){
            alert("Semua field harus diisi!");
            return;
        }

        modal.classList.add('show');
        form.reset();
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

// =======================
// GALLERY LIGHTBOX
// =======================
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;

if(lightbox && lightboxImg){
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });
}

// =======================
// NAVBAR ACTIVE SESUAI HALAMAN
// =======================
const navLinks = document.querySelectorAll('.navbar .nav-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if(link.getAttribute('href') === currentPath.split("/").pop()){
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
