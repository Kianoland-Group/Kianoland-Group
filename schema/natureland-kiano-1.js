const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.kianolandgroup.com/natureland-kiano-1#product",
    "name": "Natureland Kiano 1",
    "description": "Perumahan subsidi strategis di Cileungsi Bogor",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Cibarusah.jpeg",
            "description": "Tampilan eksterior rumah tipe 30/60 dengan desain modern minimalis"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Denah-30-60.jpg",
            "description": "Denah rumah tipe 30/60 dengan tata ruang optimal"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Interior-30-60.jpg",
            "description": "Interior rumah tipe 30/60 dengan finishing premium"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Rumah%20Sakit.jpg",
            "description": "Akses mudah ke Rumah Sakit RSUD Cileungsi dalam jarak 800 m"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/ATM.jpg",
            "description": "Fasilitas perbankan dan ATM Center terdekat"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Sekolah.jpg",
            "description": "Akses ke sekolah SD-SMA dalam radius 500 meter"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/natureland-kiano-1/Pasar.jpg",
            "description": "Pasar Gandoang - pusat perbelanjaan tradisional dengan jarak 2 km dari lokasi"
        }
    ],
    "offers": {
    "@type": "AggregateOffer",
    "highPrice": "185000000",
    "lowPrice": "185000000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/SoldOut",
    "offerCount": "0",
    "offers": [
        {
        "@type": "Offer",
        "url": "https://www.kianolandgroup.com/natureland-kiano-1/rumah-30-60",
        "name": "Rumah Subsidi Tipe 30/60",
        "price": "185000000",
        "priceValidUntil": "2024-12-31",
        "description": "Booking Fee Rp1.000.000 | Cicilan Rp1.800.000/bulan",
        "downPayment": "1000000",
        "loanTerm": "240",
        "loanTermUnit": "Bulan",
        "monthlyPayment": "1800000",
        "availability": "https://schema.org/SoldOut"
        }
    ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "28",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": {"@type": "Person", "name": "Dewi Kusuma"},
            "datePublished": "2023-07-10",
            "reviewBody": "Proses transaksi mudah dan transparan, lokasi sangat strategis",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "itemReviewed": {
                "@type": "Product",
                "@id": "https://www.kianolandgroup.com/natureland-kiano-1#product"
            }
        }
    ],
    "brand": {
        "@type": "Brand",
        "name": "Kianoland Group",
        "logo": "https://www.kianolandgroup.com/assets/Kianoland%20Group.png"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales & Booking",
        "telephone": "+628111611724",
        "whatsapp": "https://wa.me/628111611724?text=Saya%20berminat%20booking%20di%20Natureland%20Kiano%201",
        "availableLanguage": ["Bahasa Indonesia", "English"],
        "areaServed": ["Jawa Barat", "Cileungsi", "Bogor"],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    },
    "sku": "NLK1-7075",
    "floorSize": "30 m²",
    "numberOfRooms": "3",
    "numberOfBedrooms": "2",
    "numberOfBathroomsTotal": "1",
    "material": "Bata Merah + Beton Bertulang",
    "location": {
        "@type": "Place",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-6.428022",
            "longitude": "106.971624"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Kp. Tegal No. 03, RT 002/RW 01",
            "addressLocality": "Jatisari",
            "addressRegion": "Jawa Barat",
            "postalCode": "16820"
        }
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Material Bangunan",
            "value": "Bata Merah + Beton Bertulang"
        }
    ],
    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "Akses Bank & ATM",
            "value": "ATM Center dalam kompleks"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Rumah Sakit",
            "value": "RSUD Cileungsi (800 m)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Pasar",
            "value": "Pasar Gandoang (2 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Sekolah",
            "value": "SDN Jatisari 1 (500 m), SMP & SMA Cileungsi"
        }
    ],
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.kianolandgroup.com/natureland-kiano-1"
    }
};
  
// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
