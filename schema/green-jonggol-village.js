const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.kianolandgroup.com/green-jonggol-village#product",
    "name": "Green Jonggol Village",
    "description": "Perumahan hijau dengan konsep modern di Jonggol Bogor",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/hero/background_4.jpg",
            "description": "Kawasan perumahan Green Jonggol Village dengan landscape hijau dan fasilitas premium"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/green-jonggol-village/Denah-Rumah-30-60.jpg",
            "description": "Denah rumah tipe 30/60 dengan layout ruang efisien"
        },
        {
            "@type": "ImageObject", 
            "url": "https://www.kianolandgroup.com/assets/green-jonggol-village/Pasar.jpg",
            "description": "Pasar Nasional Jonggol - 1.5 km dari lokasi, lengkap dengan kebutuhan sehari-hari"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/green-jonggol-village/Waterpark.jpg",
            "description": "Jonggol Waterpark - 10 menit dari lokasi"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/green-jonggol-village/Alun-alun.jpg",
            "description": "Alun-Alun Jonggol - Pusat kota hanya 5 menit"
        },
        {
            "@type": "ImageObject",
            "url": "https://www.kianolandgroup.com/assets/green-jonggol-village/Rumah Sakit Jonggol.jpg",
            "description": "RS Permata Jonggol - 2.5 km dari perumahan"
        }
    ],
    "offers": {
        "@type": "AggregateOffer",
        "highPrice": "465000000",
        "lowPrice": "465000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "offerCount": "1",
        "offers": [
            {
                "@type": "Offer",
                "url": "https://www.kianolandgroup.com/green-jonggol-village/rumah-30-60",
                "name": "Rumah Tipe 30/60",
                "price": "465000000",
                "priceValidUntil": "2024-12-31"
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "67",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": {"@type": "Person", "name": "Budi Santoso"},
            "datePublished": "2023-11-15",
            "reviewBody": "Lingkungan asri dan fasilitas lengkap, proses KPR mudah",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
            }
        },
        {
            "@type": "Review",
            "author": {"@type": "Person", "name": "Siti Rahayu"},
            "datePublished": "2024-01-20",
            "reviewBody": "Sistem keamanan 24 jam membuat keluarga merasa nyaman",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.7",
                "bestRating": "5"
            }
        }
    ],
    "brand": {
        "@type": "Brand",
        "name": "Kianoland Group",
        "logo": "https://www.kianolandgroup.com/assets/Green Jonggol Village.png"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales & Booking",
        "telephone": "+6282118378460",
        "whatsapp": "https://wa.me/6282118378460?text=Saya%20berminat%20booking%20di%20Green%20Jonggol%20Village",
        "availableLanguage": ["Bahasa Indonesia", "English"],
        "areaServed": ["Jawa Barat", "Jonggol"],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    },
    "sku": "GJV-3060",
    "floorSize": "60 m²",
    "numberOfRooms": "3",
    "numberOfBedrooms": "2",
    "numberOfBathroomsTotal": "1",
    "material": "Hebel Double Layer + Beton Bertulang",
    "location": {
        "@type": "Place",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-6.465025",
            "longitude": "107.063148"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Kp. Pojok Salak RT 004/RW 008",
            "addressLocality": "Jonggol",
            "addressRegion": "Jawa Barat",
            "postalCode": "16830"
        }
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Kolam Renang Olympic",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Jogging Track",
            "value": "1.2 km"
        },
        {
            "@type": "PropertyValue",
            "name": "Club House",
            "value": "Tersedia"
        },
        {
            "@type": "PropertyValue",
            "name": "Smart Door System",
            "value": "Fingerprint & PIN Code"
        },
        {
            "@type": "PropertyValue",
            "name": "Carport",
            "value": "Luas untuk 1 mobil"
        },
        {
            "@type": "PropertyValue",
            "name": "Material Dinding",
            "value": "Hebel Double Layer + Plester Aci"
        },
        {
            "@type": "PropertyValue",
            "name": "Sistem Sanitasi",
            "value": "Closet Duduk Premium"
        }
    ],
    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "Taman Kota",
            "value": "Alun-Alun Jonggol - Pusat kegiatan masyarakat (800 m)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Pusat Kesehatan",
            "value": "RS Permata Jonggol (2.5 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Pusat Perbelanjaan",
            "value": "Pasar Nasional Jonggol (1.2 km)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Fasilitas Pendidikan",
            "value": "SDN Jonggol 03 (800 m)"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "Keamanan",
            "value": "One Gate System + CCTV 24 Jam"
        }
    ],
    "containsPlace": [
        {
            "@type": "SingleFamilyResidence",
            "name": "Rumah Tipe 30/60",
            "url": "https://www.kianolandgroup.com/green-jonggol-village/rumah-30-60",
            "availability": "https://schema.org/InStock",
            "inventoryLevel": {
                "@type": "QuantitativeValue",
                "value": "15"
            }
        }
    ],
    "aggregateOffer": {
        "@type": "AggregateOffer",
        "highPrice": "465000000",
        "lowPrice": "465000000",
        "priceCurrency": "IDR",
        "offers": [
            {
                "@type": "Offer",
                "url": "https://www.kianolandgroup.com/green-jonggol-village/rumah-30-60",
                "itemOffered": {
                    "@type": "SingleFamilyResidence",
                    "name": "Rumah Tipe 30/60"
                },
                "priceCurrency": "IDR",
                "price": "465000000",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock",
                "downPayment": "0",
                "loanTerm": "180",
                "loanTermUnit": "Bulan",
                "monthlyPayment": "4500000"
            }
        ]
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.kianolandgroup.com/green-jonggol-village"
    }
};
  
// Sisipkan ke dalam HTML secara otomatis
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
