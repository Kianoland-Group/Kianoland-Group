const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kianoland Group",
    "description": "Kianoland Group menawarkan hunian termurah dan strategis di Bekasi, Bogor, dan Jakarta. Temukan rumah subsidi, komersil, elit, dan minimalis dengan cicilan terjangkau.",
    "url": "https://www.kianolandgroup.com",
    "logo": "https://www.kianolandgroup.com/assets/Kianoland Group.png",
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+628111611724",
            "contactType": "ADMIN 1",
            "email": "kianolandgroup@gmail.com",
            "areaServed": "Indonesia"
        },
        {
            "@type": "ContactPoint",
            "telephone": "+6285282592945",
            "contactType": "ADMIN 2",
            "email": "kianolandgroup@gmail.com",
            "areaServed": "Indonesia"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/kianolandgroup.co.id",
        "https://www.instagram.com/kianolandgroup",
        "https://www.tiktok.com/@naturelandkiano"
    ]
};
  
// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
