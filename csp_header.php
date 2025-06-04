<?php
// Menambahkan header Content-Security-Policy untuk font dan sumber lainnya
header("Content-Security-Policy: 
    default-src 'self'; 
    font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; 
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; 
    script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
    img-src 'self' data:; 
    connect-src 'self'; 
    frame-src 'none'; 
    object-src 'none'; 
    upgrade-insecure-requests;
");

// Menambahkan header tambahan untuk mengontrol cache, jika diperlukan
header("Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate");
